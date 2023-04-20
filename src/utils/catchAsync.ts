import * as express from "express";

const catchAsync =
  (
    fn: (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => Promise<void>
  ) =>
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };

export default catchAsync;
