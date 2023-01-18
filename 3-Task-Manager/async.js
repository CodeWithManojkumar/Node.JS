const errorHandler = (err, req, res, next) => {
  return res.status(500).json({ msg: err });
};
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
module.exports = { asyncWrapper, errorHandler };
