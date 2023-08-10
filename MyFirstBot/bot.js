const Telegraf = require('telegraf');

const bot = new Telegraf('6357322301:AAEzHaubPvApiE3I3Qlqi9D7bLFjduYtcpE')

/*
bot.start((ctx)=>{
  ctx.reply(ctx.from.first_name  +" You have entered the start command and it is a " + ctx.updateSubTypes[0])
})


bot.help((ctx)=>{
  ctx.reply("You have entered the help command..")
})

bot.settings((ctx)=>{
  ctx.reply("You have entered the settings command..")
})


bot.command(["test","Test"],(ctx)=>{
  ctx.reply("Hello")
})

bot.hears("cat",(ctx)=>{
  ctx.reply("Meow")
})


bot.on("text",(ctx)=>{
  ctx.reply("This is a text message")
})

bot.use((ctx,next)=>{
  ctx.state.apple = 5
  console.log(ctx)
  ctx.reply("You used the bot")
  next(ctx)
})
*/
//when using extra parameters
bot.command('start', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Hello World', {
    parse_mode: 'Markdown',
    disable_notification: true
  });

  // Alternatively, you can use ctx.reply to send the message
  ctx.reply('Hello World', {
    parse_mode: 'Markdown',
    disable_notification: true
  });
});





bot.launch()