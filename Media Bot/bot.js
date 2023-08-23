const { Telegraf } = require('telegraf');
require('dotenv').config();



const botToken = process.env.BOT_TOKEN;

if (!botToken) {
  console.error('BOT_TOKEN environment variable is not set.');
  process.exit(1);
}

const bot = new Telegraf(botToken);

bot.on('message',ctx=>{
  console.log(ctx.message.photo)
})

bot.command('test', ctx=>{
  //url

  bot.telegram.sendPhoto(ctx.chat.id,"https://www.egypttoursportal.com/wp-content/uploads/2017/11/Stanly-Bridge-Alexandria-Egypt-Tours-Portal.jpg")

  bot.telegram.sendPhoto(ctx.chat.id,"")

})

bot.launch()