const { MessageEmbed } = require('discord.js');


module.exports = async (d) => {
   const [id,title] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   const embed = new MessageEmbed()
      .setTitle(title.addB())
   const mess = await channel.send({ embeds: [embed] });
   return ""
}
