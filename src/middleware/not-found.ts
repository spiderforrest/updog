module.exports = (req: any, res: any, next: any) => {
  const err = new Error('Not Found');
  // err.status = 404;
  next(err);
};
