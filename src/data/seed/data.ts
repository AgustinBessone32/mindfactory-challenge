import { User } from '@prisma/client';

export const usersSeed: Omit<User, 'id'>[] = [
  { name: 'Test 1', email: 'test1@google.com' },
  { name: 'Test 2', email: 'test2@google.com' },
  { name: 'Test 3', email: 'test3@google.com' },
  { name: 'Test 4', email: 'test4@google.com' },
];
