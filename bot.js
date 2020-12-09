import dotenv from 'dotenv';
import { Client, MessageEmbed } from 'discord.js';
dotenv.config();
const client = new Client();

const BOT_PREFIX = "!";
const BOT_COMMAND = "quote";

const ADMIN_COMMAND = "!!admin"

const zagaQuotes = [
    "Nasci sem balas",
    "Tava de costas",
    "Bellaaaa",
    "Só dizem quando faço mal..",
    "Ajudem!",
    "Melll"
]

const broaQuotes = [
    "Aproveita isto!",
    "LIASSARAAA"
]

const kombatQuotes = [
    "Faker",
    "Akali one trick",
    "CR7 do LoL"
]

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('message', msg => {
//     if (msg.content === `${BOT_PREFIX}${BOT_COMMAND} zaga`) {
//         const message = zagaQuotes[Math.floor(Math.random() * zagaQuotes.length)];
//         const embed = new MessageEmbed()
//             .setTitle('Zaga Quote')
//             .setColor(0xff0000)
//             .setDescription(message);
//         msg.channel.send(embed);
//     } else if (msg.content === `${BOT_PREFIX}${BOT_COMMAND} broa`) {
//         const message = broaQuotes[Math.floor(Math.random() * broaQuotes.length)];
//         const embed = new MessageEmbed()
//             .setTitle('Broa Quote')
//             .setColor(0xff0000)
//             .setDescription(message);
//         msg.channel.send(embed);
//     } else if (msg.content === `${BOT_PREFIX}${BOT_COMMAND} 4kombat`) {
//         const message = kombatQuotes[Math.floor(Math.random() * kombatQuotes.length)];
//         const embed = new MessageEmbed()
//             .setTitle('4kombat Quote')
//             .setColor(0xff0000)
//             .setDescription(message);
//         msg.channel.send(embed);
//     }
// });

client.on('message', msg => {
    if (msg.content === `${ADMIN_COMMAND} id`) {
        msg.channel.send(msg.author.id);
    } else if (msg.content === `${ADMIN_COMMAND} tag`) {
        msg.channel.send(msg.author.tag);
    }
});

client.login(process.env.BOT_TOKEN);