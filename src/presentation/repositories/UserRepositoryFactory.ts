import { UserRepositoryInterface } from './UserRepositoryInterface';
import { PostgresUserRepository } from './PostgresRepository';

export class UserRepositoryFactory {
  static createUserRepository(): UserRepositoryInterface {
    return new PostgresUserRepository();
  }
}
