const Discord = require('discord.js');
const { token , prefix} = require('/ignore/config.json');
const { company  , tradera} = require('./company.json');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//new Discord.MessageReaction(client , data , msg).count()

function dotTrick(message) {

    let mail = message.split('');
    let arr = mail.lastIndexOf("@", mail.length - 1).valueOf();


    let removed = mail.splice(arr, 10); // @gmail.com

    // add . inside random element
    let randomNumber = Math.floor(Math.random() * Math.floor(mail.length) + 1);
    let bajram = mail.join("")
    for (let i = 0; i < mail.length; i++) {
        var randomStr = bajram.substr(0, randomNumber) + "." + bajGIram.substr(randomNumber);
    }
    let editedMail = randomStr.concat(removed.join(''))
    return editedMail;
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    // the rest of your code

    if (command === 'salary') {
        if (!args.length) {
            return message.channel.send(`You didnt provide any arguments, ${message.author}!`);
        }

        if (command === 'salary' && args[0] === `apple`){
            return message.channel.send(`https://www.levels.fyi/salary/${company.apple}/ , ${message.author}!`);
        }
        if (command === 'salary' && dotTrick(`${args[0]}`)){
            return message.channel.send(`${dotTrick(args[0])}`);
        }

        if (command === 'do' && args[0].length === 13 ){
            return message.channel.send(`https://www.bokus.com/bok/${args[0]}`)
        } else {
            return message.channel.send(`Your input is not a valid ISBN number, ${message.author}!`);
        }

        if (command === 'tradera' && args[0] === `pikachu`){
            return message.channel.send(`https://www.tradera.com/search?q=${tradera.pikachu}&categoryId=293307 , ${message.author} ! `  );
        }

        //message.channel.send(`First argument: ${args[0]}`);

    }
})


client.login(token);

/*

if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong!');
} else if (message.content.startsWith(`${prefix}Jimmy`)) {
    message.channel.send('Jazz!');
} else if (message.content.startsWith(`${prefix}server`)){
    message.channel.send(`This server's name is : ${message.guild.name} \n
        This server has member count: ${message.guild.memberCount}`)  }
else if (message.content.startsWith(`${prefix}user`)){
    message.channel.send(`Your username : ${message.author.username}\n Your ID: ${message.author.id}`);
}
*/