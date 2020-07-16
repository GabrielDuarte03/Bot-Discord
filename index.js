

'use strict';

const Discord = require("discord.js");


// Create an instance of a Discord client
const bot = new Discord.Client();
const canal = Discord.channel;
const config = require('./config.json');

bot.on('ready', () => {
  bot.user.setUsername(`iBiel`);
  console.log(`Logged in as ${bot.user.tag}!`);
});



bot.on("message", async message => {
  const args = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
  const comando = args.shift().toLocaleLowerCase();
 
  if(message.author.bot) return;
  //a
    
  var men = message.content;
  var men = men.toLowerCase();
  var a = message.author.tag;
    a = a.split('#')[a.split('#').length - 1];
  if(men == "o pai ta oq?"){
      message.channel.send("PAI TA ON :sunglasses::sunglasses::sunglasses::sunglasses::sunglasses:");
  }
  if(men == "o pai ta de que?"){
        const celta = message.guild.emojis.cache.find(emoji => emoji.name === 'celta');
        message.react(celta);
        message.channel.send(`O PAI TA DE CELTA :sunglasses::sunglasses:${celta}${celta}${celta}${celta}`);
        await message.channel.send(`${celta}`);
        }
  if(men === "!ping"){
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A latência é: ${m.createdTimestamp - message.createdTimestamp}ms, e também é menor que o peso da sua mãe`)
    
  }
  if(men === "Olá"){
    const m = await message.channel.send("Olá, espero que você seja leão, senão meu criador vai te pegar na porrada!");
  }
  if(a == "1625" && men == "bom dia"){
    const m = await message.channel.send("kk eae gostosa");
  }
  if(a == "4513" && men == "aoba"){
    const m = await message.channel.send("Eae saas, tudo bem?");
  }
  if(a == "9450"){
    const m = await message.channel.send("ta bom fábio.");
  }
  if(a == "7935" && (message.content == "Bom dia" || message.content == "bom dia" || message.content == "bdia" || message.content == "bodia")){
    const m = await message.channel.send("kk eae sem-janta");
  }
  
  if(men.indexOf("porra") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("filho da puta") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("fdp") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("nerdola") != -1 ){

    const m = await message.channel.send("NERDOLA É SEU PAI");
  }
  if(men.indexOf("caraio") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  
  if(men.indexOf("caralho") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("krl") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("puta") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("puto") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("desgraca") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("desgraça") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("desgracado") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("desgraçado") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("foda") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("foder") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  if(men.indexOf("buceta") != -1 ){

    const m = await message.channel.send("PARA DE FALAR PALAVRÃO, ORDEM NO SERVIDOR");
  }
  
  if(a == "6495" && men == "apaga tudo"){

    message.channel.bulkDelete(10);


  }
  if(a == "6495" && men == "Olá meu bebê, sdds"){
    const m = await message.channel.send("Oi papai, te amo");
  }
 

});

bot.login('NzMwMzg2MTE4ODM0Mzg4OTky.XwXYhw.SWTiiS4WDQ2waf-QAMu8fC-84a4');






