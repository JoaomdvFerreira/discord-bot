import dotenv from 'dotenv';
import { Client, MessageEmbed } from 'discord.js';
import { zagaQuotes, broaQuotes, kombatQuotes } from './quotes.js';
dotenv.config();
const client = new Client();

const BOT_PREFIX = "!";
const QUOTE_BOT_COMMAND = "quote";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === `${BOT_PREFIX}${QUOTE_BOT_COMMAND} zaga`) {
        const message = zagaQuotes[Math.floor(Math.random() * zagaQuotes.length)];
        const embed = new MessageEmbed()
            .setTitle('Zaga Quote')
            .setColor(0xff0000)
            .setDescription(message);
        msg.channel.send(embed);
    } else if (msg.content === `${BOT_PREFIX}${QUOTE_BOT_COMMAND} broa`) {
        const message = broaQuotes[Math.floor(Math.random() * broaQuotes.length)];
        const embed = new MessageEmbed()
            .setTitle('Broa Quote')
            .setColor(0xff0000)
            .setDescription(message);
        msg.channel.send(embed);
    } else if (msg.content === `${BOT_PREFIX}${QUOTE_BOT_COMMAND} 4kombat`) {
        const message = kombatQuotes[Math.floor(Math.random() * kombatQuotes.length)];
        const embed = new MessageEmbed()
            .setTitle('4kombat Quote')
            .setColor(0xff0000)
            .setDescription(message);
        msg.channel.send(embed);
    }
});

client.login(process.env.BOT_TOKEN);