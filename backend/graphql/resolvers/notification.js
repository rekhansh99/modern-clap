module.exports = {
  notifications: (args, ctx) => {
    if (!ctx.req.isAuth) return null;

    if (ctx.req.role === 'customer') return null;

    let count = 0;
    const data = ctx.req.user.notifications
      .reverse()
      .slice(0, 20)
      .map(notification => {
        if (!notification.seen)
          count++;
        return {
          ...notification._doc,
          requestId: notification.requestId.toString()
        }
      });
    
    return { data, count };
  }
};
