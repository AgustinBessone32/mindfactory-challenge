import { User } from '@prisma/client';
import { UserRepositoryFactory } from '../repositories/UserRepositoryFactory';
import { UserRepositoryInterface } from '../repositories/UserRepositoryInterface';
import { CustomError } from '../../domain/errors/CustomError';

export class UserService {
  private userRepository: UserRepositoryInterface;

  constructor() {
    this.userRepository = UserRepositoryFactory.createUserRepository();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);
    if (!user) throw CustomError.notFound(`User with id ${id} not found`);
    return user;
  }

  async createUser(data: User): Promise<User> {
    return this.userRepository.createUser(data);
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    const user = await this.userRepository.updateUser(id, data);
    if (!user) throw CustomError.notFound(`User with id ${id} not found`);
    return user;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.userRepository.deleteUser(id);
    if (!user) throw CustomError.notFound(`User with id ${id} not found`);
    return user;
  }
}
