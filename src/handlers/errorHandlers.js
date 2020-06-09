exports.catchErrors = (fn) => {
    return function(req, res, next, err) {
      return fn(req, res, next).catch(next);
    };
  };