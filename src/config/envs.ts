import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  JWT_SEED: get('JWT_SEED').required().asString(),
  POSTGRES_URL: get('POSTGRES_URL').required().asString(),
  NODE_ENV: get('NODE_ENV').required().asString(),
  AUTH_CODE: get('AUTH_CODE').required().asString(),
};
