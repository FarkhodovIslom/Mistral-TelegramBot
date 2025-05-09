# 🤖 Telegram + Mistral AI Бот

Простой и мощный телеграм бот с интеграцией Mistral AI API для генерации ответов на запросы пользователей.

## 📦 Доступные версии

В проекте представлены две версии бота:

- 🐍 **Python** с библиотекой `aiogram`
- 🟢 **Node.js** с библиотекой `telegraf`

## ✨ Возможности

- 💬 Мгновенные ответы на сообщения с использованием Mistral AI
- 🧠 Интеллектуальные ответы на основе контекстного понимания
- ⚡ Высокая скорость работы и низкие задержки
- 🔧 Простота настройки и запуска

## 📋 Требования

### Общие требования
- Токен телеграм бота от [BotFather](https://t.me/BotFather)
- API ключ от [Mistral AI](https://mistral.ai/)

### Для Node.js версии
- Node.js 16+

### Для Python версии
- Python 3.8+
- pip

## 🚀 Установка и запуск

1. **Клонировать репозиторий**
   ```bash
   git clone https://github.com/yourusername/telegram-mistral-bot.git
   cd telegram-mistral-bot
   ```

2. **Создать файл .env**
   ```
   TELEGRAM_TOKEN=ваш_токен_телеграм_бота
   MISTRAL_API_KEY=ваш_ключ_api_mistral
   ```

### Node.js версия

1. **Установить зависимости**
   ```bash
   npm install
   ```

2. **Запустить бота**
   ```bash
   node bot.js
   ```

### Python версия

1. **Установить зависимости**
   ```bash
   pip install -r requirements.txt
   ```

2. **Запустить бота**
   ```bash
   python bot.py
   ```

## 🛠️ Настройка

### Node.js версия
Для изменения используемой модели Mistral AI отредактируйте строку:
```javascript
const MODEL = 'mistral-tiny'; // Доступны варианты: mistral-tiny, mistral-small, mistral-medium
```

### Python версия
Для изменения используемой модели Mistral AI отредактируйте строку:
```python
MODEL = "mistral-tiny"  # Доступны варианты: mistral-tiny, mistral-small, mistral-medium
```

## 📝 Использование

Обе версии имеют одинаковый функционал:

1. Отправьте `/start` для начала работы с ботом
2. Отправьте `/help` для получения справки
3. Отправьте любое сообщение и получите ответ от Mistral AI

## 📁 Структура проекта

```
telegram-mistral-bot/
├── bot.js                 # Node.js версия бота
├── bot.py                 # Python версия бота
├── .env                   # Файл с переменными окружения
├── package.json           # Зависимости для Node.js версии
├── requirements.txt       # Зависимости для Python версии
└── README.md              # Документация
```

## 📄 Лицензия

MIT

---

Создано с ❤️ для ваших AI-проектов