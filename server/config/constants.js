import path from 'path';
import env from './env';

const {
  NODE_ENV,
  HOST = '0.0.0.0',
  PORT = 3000,
  DB_HOST = 'mongo',
  DB_PORT = 27017,
  DB_NAME = 'dev',
  SESSION_SECRET = 'secret',
  SESSION_EXPIRATION = 60 * 60 * 24 * 7, // 7 days
  SALT_ROUNDS = 12
} = env;
const config = {
  env: NODE_ENV,
  get envs() {
    return {
      development: NODE_ENV === 'development',
      production: NODE_ENV === 'production',
    };
  },
  version: require('../../package.json').version,
  root: path.normalize(__dirname + '/../../..'),
  host: HOST || '0.0.0.0',
  port: PORT || 3000,
  apiPrefix: '', // /api/v1/
  userRoles: [],

  /**
   * MongoDB configuration
   */
  db: {
    mongo: {
      seed: true,
      uri: `mongodb://${DB_HOST}${DB_PORT ? `:${DB_PORT}` : ''}/${DB_NAME}`,
      options: {
        db: {
          safe: true
        },
      },
    },
  },

  /**
   * Security configuration
   */
  security: {
    sessionSecret: SESSION_SECRET,
    sessionExpiration: SESSION_EXPIRATION,
    saltRounds: SALT_ROUNDS
  },
};

export default config;
