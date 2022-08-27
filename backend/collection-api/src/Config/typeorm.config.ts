import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config({
  path:
    process.env.NODE_ENV.toString() == 'Development' ? '.env.development' : '',
});

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,

  ...(process.env.NODE_ENV != 'Development' && {
    ssl: {
      rejectUnauthorized: false,
    },
  }),

  entities: [],
  autoLoadEntities: true,
  synchronize: true,
};
