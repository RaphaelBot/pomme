const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NDAxNzQ2MDQyMTg3NTQ2NjQ1.DTu5kw.euIXh8a3D0sCZqB3BGN-e3ajkZs";
const music = require('discord.js-music-v11')
var prefix = "~";
var mention = "@401725412973215744"



client.on("ready", () => {
var servers = client.guilds.array().map(g => g.game).join(',');
console.log('En Ligne');
client.user.setGame("~aide | En Développement","http://twitch.tv/bot");
 





 client.user.setStatus("dnd");

})


client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Pong :ping_pong: ! Le ping est de `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});


client.on('message', message => {
if (message.content === '~uptime') {
    var time = process.uptime();

    function dhm(ms) {
        days = Math.floor(ms / (24 * 60 * 60 * 1000));
        daysms = ms % (24 * 60 * 60 * 1000);
        hours = Math.floor((daysms) / (60 * 60 * 1000));
        hoursms = ms % (60 * 60 * 1000);
        minutes = Math.floor((hoursms) / (60 * 1000));
        minutesms = ms % (60 * 1000);
        sec = Math.floor((minutesms) / (1000));
        return days + ":" + hours + ":" + minutes + ":" + sec;
    }
    message.channel.sendMessage(dhm(time));
   }
});




client.on('message', message => {
if(message.content === prefix + "aide") {
    message.channel.send("**📩 Verifie tes messages privés**")
	var help_embed = new Discord.RichEmbed()
		.setColor('#00FFFF')
		.setTitle('Commande-Aide')
.setFooter('千ΛĿΛ千ΣĿ')
		.addField('__Utilités__\n', '\n**~aide**  Ouvre le menu help\n **~ping**  Ping Pong :ping_pong:\n**~invite**  Sert à m\'inviter :wink:\n**~roll** roll ~~5~~d~~5~~\n**~flip** Lance une piéce\n__Informations__\n\n**~botinfos**  Affiche les infos du bot\n**~maj** Affiche les m.a.j')
message.author.send(help_embed);
}

});


client.on('message', message => {
if(message.content === prefix + "invite") {
	var invite_embed = new Discord.RichEmbed()
		.setColor('#00FFFF')
		.setTitle('Lien D\'invitation')
		.addField('Pour m\'inviter dans votre serveur :wink:', '[Clique ici](https://discordapp.com/api/oauth2/authorize?client_id=401746042187546645&permissions=8&scope=bot)')
message.channel.send(invite_embed);
}

});

client.on('message', message => {
if(message.content === prefix + "infosbot") {
	var invite_embed = new Discord.RichEmbed()
		.setColor('#00FFFF')
		.setTitle('Infos Bot')
		.addField('**Owner**', '@千ΛĿΛ千ΣĿ#4019 ')
   .addField('**Version**', '0.2')
   .addField('**Logiciel**', 'Node.Js')
   .addField('**Création**', '13/01/2018')
   .addField('**Vps**', 'En local pour l\'instant')
message.channel.send(invite_embed);
}

});


client.on('message', message => {
if(message.content === prefix + "maj") {
	var maj_embed = new Discord.RichEmbed()
		.setColor('#00FFFF')
		.setTitle('Mise à jour')
		.setFooter('Made by Falafel')
		.addField('M.A.J', 'Je suis maintenant en 0.2')
message.channel.send (maj_embed)
}
});



client.on('message', message => {
if(message.content === prefix + "serveurs") {
    message.channel.send("***Les serveurs ont été envoyés en messages privés 📝***")
var server_embed = new Discord.RichEmbed()
		.setColor('#00FFFF')
		.setTitle('Serveurs Partenaires')
		.setFooter('Made by Falafel')
		.addField('**~ Magical Music Book :3**', '[Clique !](https://discord.gg/PWqkPu4)')
  .addField('\n**~ </> Bots Développement </>**', '[Clique ici](https://discord.gg/fyxUj9H)')
message.author.send(server_embed);
}

});

client.on('message', message => {
if(message.content === "1+1") {
message.channel.send("2...je crois :thinking:")
}
});

client.on('guildMemberAdd', member => {
   member.send("Bienvenue sur le serveur !");
});

client.on('guildMemberLeft', member => {
   member.send("Aurevoir :cry: !!");
});


client.on('message', (message) => {

  const messageWords = message.content.split(' ');

  const rollFlavor = messageWords.slice(2).join(' ');

  if (messageWords[0] === '~roll') {

    if (messageWords.length === 1) {

      

      return message.reply(

        (Math.floor(Math.random() * 6) + 1) + ' ' + rollFlavor

      );

    }


    let sides = messageWords[1]; 

    let rolls = 1;

    if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {

      

      rolls = messageWords[1].split('d')[0] / 1;

      sides = messageWords[1].split('d')[1];

    } else if (messageWords[1][0] == 'd') {

      // !roll d20

      sides = sides.slice(1);

    }

    sides = sides / 1; // convert to number

    if (isNaN(sides) || isNaN(rolls)) {

      return;

    }

    if (rolls > 1) {

      const rollResults = [];

      for (let i = 0; i < rolls; i++) {

        rollResults.push(Math.floor(Math.random()*sides)+1);

      }

      const sum = rollResults.reduce((a,b) => a + b);

      return message.reply(`[${rollResults.toString()}] ${rollFlavor}`);

    } else {

      return message.reply(

        (Math.floor(Math.random() * sides) + 1) + ' ' + rollFlavor

      );

    }

  }

});

client.on('message', message => {
if (message.content === "~flip") {
    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    	message.channel.send("Pile !");
    	} else if (result == 2) {
    		message.channel.send("face !");
    	}
    }

});

client.on('message', message => {
if(command === "~say") { 

    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 

    message.channel.send(sayMessage);

  }
});

client.on('message', message => {
if(command === "~kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Ban"].includes(r.name)) )
      return message.reply(":x: | Je n'ai pas reussi !");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mentionnez une personne correctement");
    if(!member.kickable) 
      return message.reply("je n'arrive pas à le kick !");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(" ${error}`"));
    message.reply("`${member.user.tag} a bein été kick ; ${message.author.tag} because: ${reason}`");

  }
});


client.login(token)