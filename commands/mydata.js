const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const userdata = require('../server_user');
const Serializer = require('../File_Function/Serializer');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('mydata')
		.setDescription('現在のコイン数を確認できます'),
	async execute(interaction) 
	{
		let id = interaction.user.id;
		let a = await Serializer.Deserialize(id);
		let userdata_ = new userdata();
		userdata_ = a;
		await interaction.reply(`${interaction.user.username}さん\n**所有コイン<a:z_:1054743019129147482>**:${userdata_.credit}`);
	},
};
