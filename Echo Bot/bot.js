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
  logger(ctx)
  ctx.reply("Hi")
  ctx.reply(helpMessage);
})

bot.help((ctx)=>{
  ctx.reply(help)
})

bot.command("echo",(ctx)=>{
  logger(ctx)
  console.log(ctx)

  let input = ctx.message.text

  let inputArray = input.split("")

  console.log(inputArray)

  let message = ""


  if(inputArray.length ==1){
    message = "You said echo"
  }else{
    inputArray.shift()
    message = inputArray.join("")
  }
  ctx.reply(message)
})

function logger(ctx){
  console.log('Someone used your bot')
}

bot.launch();