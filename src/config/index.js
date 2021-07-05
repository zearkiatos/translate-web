require('dotenv').config();

const isDevelop = process.env.ENVIRONMENT === 'develop';
const config = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    DEVELOP: isDevelop
};

module.exports = config;