const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Provider = require("../../models/provider");
const { transformProvider, provider } = require("./transformers/provider");

module.exports = {
  providers: async (args, req) => {
    const providers = await Provider.find();
    return providers.map((provider) => transformProvider(provider));
  },

  provider: (args, req) => {
    return provider(args.id);
  },

  registerProvider: async (args) => {
    const hashedPassword = await bcrypt.hash(args.provider.password, 12);
    const newProvider = new Provider({
      ...args.provider,
      password: hashedPassword,
    });
    const provider = await newProvider.save();
    return transformProvider(provider);
  },

  loginProvider: async (args, ctx) => {
    const provider = await Provider.findOne({ ownerEmail: args.email });
    if (!provider) {
      throw new Error("User not found!");
    }
    const passwordMatch = await bcrypt.compare(
      args.password,
      provider.password
    );
    if (!passwordMatch) {
      throw new Error("Password not matched!");
    }
    const jwtValidity = 60 * 60 * 24 * 30; // in seconds
    const token = jwt.sign(
      {
        uid: provider.id,
        role: "provider",
        exp: Math.floor(Date.now() / 1000) + jwtValidity,
      },
      process.env.JWT_SECRET
    );
    ctx.res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      maxAge: jwtValidity * 1000,
    });
    return transformProvider(provider);
  },

  updateProvider: (args, req) => {
    // TODO
  },
};
