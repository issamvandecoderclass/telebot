const Telebot = require('telebot');

const bot = new Telebot ({
    token: '424146264:AAHgwo4Nvf_DB9eZreJnSm9LePWelcXZxwM'
});

console.log("Verbinding gelukt");

bot.on('/start', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " is verbonden met mijn bot.");
  return bot.sendMessage(msg.from.id, "Hoi " + msg.from.first_name + ". Tof dat je de Issam Bot gebruikt. Dit is mijn eerste Telgram bot. Dit zijn de commands die je nu kan gebruiken: hoi, goedendag. Voor meer commando's typ /commando. Voor hulp type /help.");
});

bot.on(/([Jj]e bent gay)/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft gay gezegd");
  return bot.sendMessage(msg.from.id, "Je vader is gay.");
});

bot.on(/^([hH]oi|[hH]allo|[gG]oedendag)/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft hoi gezegd");
  return bot.sendMessage(msg.from.id, "Hallo " + msg.from.first_name );
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

bot.on(/.*[\?]$/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft een vraag");
  return bot.sendMessage(msg.from.id, "Weet ik veel " + msg.from.first_name + ".");
});

bot.on(/[sS]tuur een foto/, function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft om een foto gevraagd");
  return bot.sendMessage(msg.from.id, "Ik stuur je wel een foto " + msg.from.first_name + ".");
});

bot.on('/foto', (msg) => {
    console.log(msg.from.first_name + " " + msg.from.id + " heeft een foto opgevraagd");
    return bot.sendPhoto(msg.from.id, "images/coding.jpg");
});

bot.on('/commando', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft commando's gevraagd");
  return bot.sendMessage(msg.from.id, "Commando's die je kunt gebruiken: hoi, ewa, Hoe gaat het, Hoe laat is het, Welke dag is het, Hoe heet je? /help, /over. Veel succes " + msg.from.first_name + ".");
});

bot.on('/help', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft /help gezegd");
  return bot.sendMessage(msg.from.id, "Dit is een bot die is gemaakt door Issam van de CoderClass. Veel succes " + msg.from.first_name + ".");
});

bot.on('/over', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft over gezegd");
  return bot.sendMessage(msg.from.id, "Dit is de eerste versie van de Issam bot (/versie). Ik ben gemaakt door Issam Van de CoderClass. Mijn beste vriend is @bilal_assistent_bot. Dit heb ik gedaan met de module: Bots-programmeren. ");
});

bot.on('/versie', function (msg) {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft versie gezegd");
  return bot.sendMessage(msg.from.id, "Dit is versie 1.1.3. Ik ben nog bezig met een beta update. Beoordeel dit alsjeblieft bij mij (niet de bot ;)");
});

bot.on("document", (msg) => {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft een document gestuurd.");
  return bot.sendMessage(msg.from.id, "Dank je voor het document!");
});

bot.on("photo", (msg) => {
  console.log(msg.from.first_name + " " + msg.from.last_name + " met id: " + msg.from.id + " heeft een foto gestuurd.");
  return bot.sendMessage(msg.from.id, "Ha! Grappige foto.");
});

bot.on(/postcode [0-9][0-9][0-9][0-9][A-Za-z][A-Za-z]/, (msg, props) => {
    console.log("Postcode");
    let reageer = {replyToMessage: msg.message_id};
    const postcode = props.match[1];

    let correct = "Bedank van het doorgeven van een goede postcode " + msg.from.first_name + ".";

    return bot.sendMessage(msg.from.id,correct,reageer);
});

bot.on(/postcode .+/, (msg, props) => {
  let reageer = {replyToMessage: msg.message_id};

  return bot.sendMessage(msg.from.id,"De opgegeven postcode is niet geldig.", reageer);
});


bot.on(/(.+)/, function (msg, props) {
  var text = props.match[1];
  console.log(msg.from.first_name + " " + msg.from.last_name + ": " + text);
});

bot.start();
