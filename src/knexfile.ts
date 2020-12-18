import path from 'path';
import { envs } from './envs';

const knexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      host: envs.host,
      port: envs.port,
      database: envs.dbName,
      user: envs.user,
      password: envs.password,
    },
    pool: {
      min: 2,
      max: 10
    },
    searchPath: ['knex', 'public'],
    migrations: {
      directory: path.join(__dirname, './db/migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.join(__dirname, './db/seeds')
    }
  }
};

export default knexConfig;
