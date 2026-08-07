const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true
});


bot.onText(/\/start/, (msg) => {

    const chatId = msg.chat.id;

    bot.sendMessage(
        chatId,
        "🎮 أهلاً بك في Play Point\n\nاضغط على الزر للدخول إلى التطبيق 🚀",
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "🚀 فتح التطبيق",
                            web_app: {
                                url: "https://saad21938884.github.io/VALUXTAPV0.1/"
                            }
                        }
                    ]
                ]
            }
        }
    );

});


console.log("Play Point Bot Started");