import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT,
    verifyToken: process.env.VERIFY_TOKEN,
};

export default config;
