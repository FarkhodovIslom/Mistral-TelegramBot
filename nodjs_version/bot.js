// Импортируем необходимые библиотеки
import { Telegraf } from 'telegraf';
import { MistralClient } from '@mistralai/mistralai';
import config from './config/config.js';
import dotenv from 'dotenv';
dotenv.config();

// Config,jsdan tokenlarni olamiz
const TELEGRAM_TOKEN = config.telegram_token;
const MISTRAL_API_KEY = config.mistral_api;

// Инициализация клиентов
const bot = new Telegraf(TELEGRAM_TOKEN);
const mistralClient = new MistralClient(MISTRAL_API_KEY);

//  Mistral APIni konfiguratsiyasi
const MODEL = 'mistral-medium'; // model-tiny, model-small bor yana bundan tezroq

// /start comandasi
bot.start((ctx) => {
  ctx.reply('Привет! Я бот, который использует API Mistral для ответов на твои вопросы. Просто напиши мне что-нибудь!');
});

// /help
bot.help((ctx) => {
  ctx.reply('Отправь мне любое сообщение, и я отвечу с помощью Mistral AI.');
});

// Text zaprosla uchun 
bot.on('text', async (ctx) => {
  try {
    // Typing yozuvini ko'rsatish uchun
    await ctx.telegram.sendChatAction(ctx.chat.id, 'typing');
    
    const userMessage = ctx.message.text;
    
    // Mistral APIdan responsni qabul qilamiz
    const response = await mistralClient.chat({
      model: MODEL,
      messages: [{role: 'system', content: ''}, { role: 'user', content: userMessage }],
    });
    
    // Userga javobni jonatamiz
    await ctx.reply(response.choices[0].message.content);
  } catch (error) {
    console.error('Ошибка при обработке сообщения:', error);
    await ctx.reply('Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте еще раз.');
  }
});

// Botti ishga tushiramiz
bot.launch()
  .then(() => console.log('Бот запущен!'))
  .catch((err) => console.error('Ошибка запуска бота:', err));

// Instanceni terminate qilish uchun 
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));