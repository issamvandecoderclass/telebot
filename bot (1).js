const Telebot = require('telebot');

const bot = new Telebot ({
    token: '424146264:AAHgwo4Nvf_DB9eZreJnSm9LePWelcXZxwM'

});

bot.on('/start', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " is verbonden met mijn bot.");
  return bot.sendMessage(msg.from.id, "Hoi " + msg.from.first_name + ". Tof dat je de Issam Bot gebruikt. Dit is mijn eerste Telgram bot. Dit zijn de commands die je nu kan gebruiken: hoi, ewa. Voor meer commando's typ /commando. Voor hulp type /help.");
});

bot.on(/hoi/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft hoi gezegd");
  return bot.sendMessage(msg.from.id, "Hallo " + msg.from.first_name );
});

bot.on(/ewa/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft ewa gezegd");
  return bot.sendMessage(msg.from.id, "Ewa strijder!");
});

bot.on(/[hH]oe gaat het/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft hoe gaat het gezegd");
  return bot.sendMessage(msg.from.id, "Goed, bedankt dat je dat vraagt " + msg.from.first_name );
});

bot.on(/[hH]oe laat is het/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft hoe laat is het gezegd");
  return bot.sendMessage(msg.from.id, "Keek maar eerst naar je klok. Lukt dat niet? Kijk naar je taakbalk om te kijken hoe laat het is. Anders: Helaas kan ik niks voor je doen " + msg.from.first_name + "!" );
});

bot.on(/[wW]elke dag is het/, function (msg) {
    console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft welke dag is het gezegd");
  return bot.sendMessage(msg.from.id, "Kijk maar in je agenda. Lukt dat niet? Kijk op je telefoon. Anders: Ik kan niks anders voor je doen " + msg.from.first_name + ".");
});

bot.on(/[hH]oe heet je/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft hoe heet je gezegd");
  return bot.sendMessage(msg.from.id, "Ik ben de enige echte Issam bot. Versie 1.1.12. Welkom " + msg.from.first_name + ".");
});

bot.on(/[wW]ie ben je/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft wie ben je gezegd");
  return bot.sendMessage(msg.from.id, "Ik ben de enige echte Issam bot. Versie 1.1.12. Welkom " + msg.from.first_name + ".");
});

bot.on(/[wW]ie ben jij/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft wie ben jij gezegd");
  return bot.sendMessage(msg.from.id, "Ik ben de enige echte Issam bot. Versie 1.1.12. Welkom " + m1sg.from.first_name + ".");
});

bot.on(/[sS]tuur een foto/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft om een foto gevraagd");
  return bot.sendMessage(msg.from.id, "Ik stuur je wel een foto " + msg.from.first_name + ".");
});

bot.on('/commando', function (msg) {
  return bot.sendMessage(msg.from.id, "Commando's die je kunt gebruiken: hoi, ewa, Hoe gaat het, Hoe laat is het, Welke dag is het, Hoe heet je? /help, /over. Veel succes " + msg.from.first_name + ".");
});

bot.on('/help', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft /help gezegd");
  return bot.sendMessage(msg.from.id, "Commando's die je kunt gebruiken: hoi, ewa, Hoe gaat het, Hoe laat is het, Welke dag is het, Hoe heet je? Typ het commando /over om meer over deze bot te weten te komen. Veel succes" + msg.from.first_name + ".");
});

bot.on('/over', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft over gezegd");
  return bot.sendMessage(msg.from.id, "Dit is de eerste versie van de Issam bot (/versie). Ik ben gemaakt door Issam Van de CoderClass. Mijn beste vriend is @bilal_assistent_bot. Dit heb ik gedaan met de module: Bots-programmeren. ");
});

bot.on('/versie', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft versie gezegd");
  return bot.sendMessage(msg.from.id, "Dit is versie 1.1.3. Ik ben nog bezig met een beta update. Beoordeel dit alsjeblieft bij mij (niet de bot ;)");
});

bot.start();
