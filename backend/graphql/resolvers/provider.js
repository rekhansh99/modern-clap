const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Provider = require('../../models/provider');
const Business = require('../../models/business');
const Type = require('../../models/type');
const { transformProvider, provider } = require('./transformers');

module.exports = {
  providers: async () => {
    const providers = await Provider.find();
    return providers.map(transformProvider);
  },

  provider: (args, ctx) => {
    if (!ctx.req.isAuth) throw new Error('Not authenticated!');
    if (ctx.req.role === 'customer') throw new Error('Not authorized!');
    if (args.id) {
      return provider(args.id);
    } else if (ctx.req.role === 'provider' && ctx.req.uid) {
      return provider(ctx.req.uid);
    } else {
      throw new Error('Either pass a provider ID or login');
    }
  },

  registerProvider: async args => {
    console.log(args);
    const validType = await Type.exists({
      _id: args.business.type
    });
    if (!validType) throw new Error('Type does not exist');

    const hashedPassword = await bcrypt.hash(args.provider.password, 12);

    const newBusiness = new Business({
      ...args.business,
      services: [],
      requests: [],
    });
    const business = await newBusiness.save();

    const newProvider = new Provider({
      ...args.provider,
      password: hashedPassword,
      businesses: [business._id],
      notifications: []
    });
    const provider = await newProvider.save();

    business.provider = provider._id;
    await business.save();

    return transformProvider(provider);
  },

  loginProvider: async (args, ctx) => {
    const provider = await Provider.findOne({ ownerEmail: args.email });
    if (!provider) {
      throw new Error('User not found!');
    }
    const passwordMatch = await bcrypt.compare(
      args.password,
      provider.password
    );
    if (!passwordMatch) {
      throw new Error('Password not matched!');
    }
    const jwtValidity = 60 * 60 * 24 * 30; // in seconds
    const token = jwt.sign(
      {
        uid: provider.id,
        role: 'provider',
        exp: Math.floor(Date.now() / 1000) + jwtValidity
      },
      // eslint-disable-next-line no-undef
      process.env.JWT_SECRET
    );
    ctx.res.cookie('jwt', token, {
      httpOnly: true,
      // secure: true,
      maxAge: jwtValidity * 1000
    });
    return transformProvider(provider);
  },

  updateProvider: async (args, ctx) => {
    console.log(args);
    if (!ctx.req.isAuth) throw new Error('Not authenticated!');
    let providerId = ctx.req.uid;
    if (args.id) {
      providerId = args.id;
    }
    const provider = await Provider.findById(providerId);
    Object.keys(args.newData).map(key => {
      switch (key) {
        case 'password':
          break;
      }
      provider[key] = args.newData[key];
    });
    await provider.save();
    return transformProvider(provider);
  }
};
