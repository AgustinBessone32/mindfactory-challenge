import { Request, Response } from 'express';
import { UserService } from './service';
import { HandleError } from '../../utils/handleError';
import { CustomError } from '../../domain/errors/CustomError';

export class UserController extends HandleError {
  constructor(public readonly userService: UserService) {
    super();
  }

  public getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      if (!id) throw CustomError.badRequest('Missing id');

      const user = await this.userService.getUserById(id);

      res.json(user);
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await this.userService.createUser(req.body);

      res.json({ message: 'User created', data: user });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      if (!id) throw CustomError.badRequest('Missing id');

      const user = await this.userService.updateUser(id, req.body);

      res.json({ message: 'User updated', data: user });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      if (!id) throw CustomError.badRequest('Missing id');

      await this.userService.deleteUser(id);

      res.json({ message: 'User deleted' });
    } catch (error) {
      console.log('error', error);
      this.handleError(error, res);
    }
  };
}
