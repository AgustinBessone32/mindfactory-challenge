import { Request, Response } from 'express';
import { jwtAdapter } from '../../config/jwt-adapter';
import { HandleError } from '../../utils/handleError';
import { envs } from '../../config/envs';

export class AuthController extends HandleError {
  constructor() {
    super();
  }

  public authenticate = async (req: Request, res: Response): Promise<void> => {
    try {
      const { code } = req.body;

      if (code === envs.AUTH_CODE) {
        const tkn = await jwtAdapter.generateToken({ code: req.body.code });
        res.json({
          message: 'Bienvenid@ al challenge de Mindfactory',
          token: tkn,
        });
      }
      res.status(401).json({
        message: 'Invalid code',
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };
}
