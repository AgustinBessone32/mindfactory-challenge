import { NextFunction, Response, Request } from 'express';
import { Schema } from 'joi';

export class JoiValidationMiddleware {
  private schema: Schema;
  constructor(schema: Schema) {
    this.schema = schema;
  }

  validate = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      res.status(400).json({ error: errorMessages });
      return;
    }
    next();
  };
}
