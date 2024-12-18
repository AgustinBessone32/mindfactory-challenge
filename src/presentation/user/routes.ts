import { Router } from 'express';
import { UserController } from './controller';
import { UserService } from './service';
import { TokenMiddleware } from '../middlewares/token';
import { JoiValidationMiddleware } from '../middlewares/joiValidation';
import { newUserSchema } from '../../schemas/newUser';
import { updateUserSchema } from '../../schemas/updateUser';

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const userService = new UserService();
    const controller = new UserController(userService);
    const token = new TokenMiddleware();
    const newUserJoiValidation = new JoiValidationMiddleware(newUserSchema);
    const updateUserJoiValidation = new JoiValidationMiddleware(
      updateUserSchema,
    );

    router.get('/', controller.getUsers);
    router.get('/:id', controller.getUser);
    router.post(
      '/',
      [token.validate, newUserJoiValidation.validate],
      controller.createUser,
    );
    router.put(
      '/:id',
      [token.validate, updateUserJoiValidation.validate],
      controller.updateUser,
    );
    router.delete('/:id', token.validate, controller.deleteUser);

    return router;
  }
}
