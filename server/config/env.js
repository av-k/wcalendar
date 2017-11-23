import path from 'path';
import dotenv from 'dotenv';

const env = (dotenv.config({path: path.join(__dirname, '../..', `.env_${process.env.NODE_ENV || 'development'}`)}) || {}).parsed || {};

export default env;
