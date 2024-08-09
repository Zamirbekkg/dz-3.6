
const token = '7022297122:AAF1pN354Mo-jSL6kk8eAB4DE2v3gFoQvAg'
const params = {
    method: 'post',
    headers: {
        'content-type' : 'application/json'
    },
    body:JSON.stringify({
        text: 'Hello World',
        chat_id:-4279815147
    })
}
fetch(`https://api.telegram.org/bot${token}/sentMessang` ,params)












var telegram_bot_id = "api";
var chat_id = "id";
var img;
var ready = function () {
    img = document.getElementById("photo").value;
    message = "photo: " + img ;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendPhoto",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    
        window.location.href = "index.html";
    });
    document.getElementById("photo").value = "";
    return false;
};











const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

// Замените 'YOUR_TOKEN' на токен вашего бота
const token2 = 'YOUR_TOKEN';

// Создание экземпляра бота
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я ваш новый бот. Отправьте мне фото или видео.');
});

// Обработка фото
bot.on('photo', (msg) => {
  const chatId = msg.chat.id;
  const photoId = msg.photo[msg.photo.length - 1].file_id; // Получаем ID самого большого размера фото

  // Отправка обратно полученного фото
  bot.sendPhoto(chatId, photoId, { caption: 'Вот ваше фото!' });
});

// Обработка видео
bot.on('video', (msg) => {
  const chatId = msg.chat.id;
  const videoId = msg.video.file_id; // Получаем ID видео

  // Отправка обратно полученного видео
  bot.sendVideo(chatId, videoId, { caption: 'Вот ваше видео!' });
});
