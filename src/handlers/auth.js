module.exports = (req, res, next) => {
    if (req.session.user) {
      return next();
    }
    return res.json({ message: 'offline' });
  };
  