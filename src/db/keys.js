import dotenv from 'dotenv';

dotenv.config();

export const keys = {
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.DATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT,
}