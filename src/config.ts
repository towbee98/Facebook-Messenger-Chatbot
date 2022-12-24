import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT,
    verifyToken: process.env.VERIFY_TOKEN,
    PAGE_ACCESS_TOKEN: process.env.PAGE_ACCESS_TOKEN,
};

export default config;
