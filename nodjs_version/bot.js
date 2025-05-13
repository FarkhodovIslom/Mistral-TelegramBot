const { Telegraf } = require('telegraf');
const axios = require('axios');
const fs = require('fs');


const BOT_TOKEN = '7427597393:AAEtwiwp4qBOdAo6S_0BrUp9ZqP_PZAL2tY';
const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';
const MISTRAL_API_KEY = 'IJakwoNHBhDJYVuR1uWjen5OG860IVKd';


const MODEL_NAME = 'mistral-small';

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('Welcome! Send me a message, and I will process it using the Mistral API.');
});

const systemPrompt = `
    Your name is Ergash. 
`

bot.on('text', async (ctx) => {
    const userMessage = ctx.message.text;
    try {
        const response = await axios.post(
            MISTRAL_API_URL,
            {
                model: MODEL_NAME,
                messages: [
                    {role: 'system', content: systemPrompt},
                    { role: 'user', content: userMessage }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${MISTRAL_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log(response.data);

        const mistralResponse = response.data.choices && response.data.choices.length > 0
            ? response.data.choices[0].message.content
            : 'bot javob qaytarmadi.';
        ctx.reply(mistralResponse, { parse_mode: 'Markdown' });
        console.log(`User: ${ctx.from.username} | Message: ${userMessage}`);
        console.log(`Bot: ${mistralResponse}`);
    } catch (error) {
        console.error('Error communicating with Mistral API:', error);
        ctx.reply('Kechirasiz qanqadir error bor');
    }

    
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
