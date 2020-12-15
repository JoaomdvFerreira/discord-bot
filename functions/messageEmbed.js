import { MessageEmbed } from 'discord.js';
export const quoteCard = (msg, user, array) => {
    const message = array[Math.floor(Math.random() * array.length)];
    const embed = new MessageEmbed()
        .setTitle(`${user} Quote`)
        .setColor(0xff0000)
        .setDescription(message);
    msg.channel.send(embed);
}

export const infoCard = (msg) => {
    const message = `Command available: !quote
                     Users available: Zaga , Broa, 4kombat, Djimmy`;
    const embed = new MessageEmbed()
        .setTitle("Quote Info")
        .setColor(0xff0000)
        .setDescription(message);
    msg.channel.send(embed);
}