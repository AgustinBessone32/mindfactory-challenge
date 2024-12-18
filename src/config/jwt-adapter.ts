import jwt from 'jsonwebtoken';
import { envs } from './envs';

const JWT_SEED = envs.JWT_SEED;

export const jwtAdapter = {
  async generateToken(payload: { code: string }, duration: string = '1h') {
    return new Promise((resolve) => {
      jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
        if (err) throw resolve(null);

        resolve(token);
      });
    });
  },

  validateToken(payload: string) {
    return new Promise((resolve) => {
      jwt.verify(payload, JWT_SEED, (err, decoded) => {
        if (err) return resolve(null);

        resolve(decoded);
      });
    });
  },
};
