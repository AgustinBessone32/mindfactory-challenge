import { NextFunction, Request, Response } from 'express';

export class TokenMiddleware {
  constructor() {}

  validate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        res.status(401).send('Token is missing');
        return;
      }

      next();
    } catch {
      res.status(401).send('Error validating token');
      return;
    }
  };
}
