const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const userdata = require('../server_user');
const Serializer = require('../File_Function/Serializer');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('mydata')
		.setDescription('現在のジェム数を確認できます'),
	async execute(interaction) 
	{
		let id = interaction.user.id;
		let a = await Serializer.Deserialize(id);
		let userdata_ = new userdata();
		userdata_ = a;
		//await interaction.reply(`GamerTag:${JSON.stringify(a)}`);
		await interaction.reply(`${interaction.user.username}さん\n**所有ジェム<a:z_:1054743019129147482>**:${userdata_.credit}\n**ランク**:${userdata_.rank}`);
		//await interaction.reply(`ファイルを生成中身：${a.gamertag}`);
	},
};