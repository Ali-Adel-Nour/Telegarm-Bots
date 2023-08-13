const { Telegraf } = require('telegraf');
require('dotenv').config();



const botToken = process.env.BOT_TOKEN;

if (!botToken) {
  console.error('BOT_TOKEN environment variable is not set.');
  process.exit(1);
}

const bot = new Telegraf(botToken);


const helpMessage = `
Say something to me
/start-start the bot
/help - command reference`

bot.start((ctx)=>{
  ctx.reply("Hi")
  ctx.reply(helpMessage);
})

bot.help((ctx)=>{
  ctx.reply(help)
})

bot.launch();