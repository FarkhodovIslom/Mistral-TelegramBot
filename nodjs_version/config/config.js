require('dotenv').config;

const config = {
    port: process.env.PORT || 3125,
    database_uri: process.env.DB_URI || 'localhost:/localhost:27017/mistral_bot',
    telegram_token: process.env.TGBOT_API_KEY,
    bot_username: process.env.BOT_USERNAME,
    admin_id: process.env.ADMIN_ID,
    mistral_api: process.env.MISTRAL_API_KEY,
}

module.exports = config;