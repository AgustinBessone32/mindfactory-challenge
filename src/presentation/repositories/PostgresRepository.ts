import { PrismaClient, User } from '@prisma/client';
import { UserRepositoryInterface } from './UserRepositoryInterface';

const prisma = new PrismaClient();

export class PostgresUserRepository implements UserRepositoryInterface {
  async getUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id: +id },
    });
  }

  async createUser(user: User): Promise<User> {
    return prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });
  }

  async updateUser(id: string, userData: User): Promise<User | null> {
    return prisma.user.update({
      where: { id: +id },
      data: userData,
    });
  }

  async deleteUser(id: string): Promise<User | null> {
    return await prisma.user.delete({
      where: { id: +id },
    });
  }
}
