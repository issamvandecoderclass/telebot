const Telebot = require('telebot');

const bot = new Telebot ({
    token: '577887150:AAG9AS8Apunj2bo16OjaGKyTLcNeOZU24Zc'
});

console.log("Verbinding gelukt");

bot.on('/start', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " is verbonden met mijn bot.");
  return bot.sendMessage(msg.from.id, "Ok " + msg.from.first_name + ".");
});



bot.on(/(.+)/, function (msg, props) {
  var text = props.match[1];
  console.log(msg.from.first_name + " " + msg.from.last_name + ": " + text);
});

bot.start();
