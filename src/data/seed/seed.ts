import { envs } from '../../config/envs';
import { prismaClient } from '../prisma';
import { usersSeed } from './data';

(async () => {
  seedInfo();
})();

async function seedInfo() {
  try {
    if (envs.NODE_ENV !== 'production') {
      await prismaClient.user.deleteMany();

      await prismaClient.user.createMany({ data: usersSeed });

      console.log('Database Seeded!!');
    }
  } catch (error) {
    console.log('error while seeding ', error);
  }
}
