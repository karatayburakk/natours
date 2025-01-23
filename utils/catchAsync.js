export const catchAsync = (handler) => {
  return (req, res, next) => {
    handler(req, res, next).catch(next);
  };
};
