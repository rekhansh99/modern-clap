module.exports = {
  notifications: (args, ctx) => {
    if (!ctx.req.isAuth) return null;

    if (ctx.req.role === 'customer') return null;

    return ctx.req.user.notifications
      .reverse()
      .slice(0, 20)
      .map(notification => ({
        ...notification._doc,
        requestId: notification.requestId.toString()
      }));
  }
};
