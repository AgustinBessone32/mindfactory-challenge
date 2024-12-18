import { User } from '@prisma/client';

export interface UserRepositoryInterface {
  getUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User | null>;
  createUser(user: Partial<User>): Promise<User>;
  updateUser(id: string, userData: Partial<User>): Promise<User | null>;
  deleteUser(id: string): Promise<User | null>;
}
