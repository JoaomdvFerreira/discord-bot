import dotenv from 'dotenv';
import { Client, Message } from 'discord.js';
import { quoteCard, infoCard } from './functions/messageEmbed.js';
import { findById, findByNick } from './functions/helpers.js';
dotenv.config();
const client = new Client();

const QUOTE_PREFIX = "!quote";
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(QUOTE_PREFIX) || msg.author.bot) return;

    if (msg.content.startsWith(QUOTE_PREFIX)) {
        const args = msg.content.slice(QUOTE_PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        const foundId = findById(command);
        const foundNick = findByNick(command);

        if (foundId) {
            quoteCard(msg, foundId.nick, foundId.quotes);
        } else if (foundNick) {
            quoteCard(msg, foundNick.nick, foundNick.quotes);
        } else {
            infoCard(msg);
        }
    }
});


client.login(process.env.BOT_TOKEN);