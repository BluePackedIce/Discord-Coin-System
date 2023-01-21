const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const userdata = require('../server_user');
const Serializer = require('../File_Function/Serializer');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('credit')
		.setDescription('指定ユーザーにコインを追加します')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('コインを追加する対象を選択')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('count')
				.setDescription('追加するコイン枚数')
				.setRequired(true)),

	async execute(interaction) 
	{
		const target = interaction.options.getUser('target');//送信されるプレイヤー
		const count = interaction.options.getString('count');//送信コイン枚数
		let id = target.id;//送信されるプレイヤーのID
		let a = await Serializer.Deserialize(id)
		let readclass = Object.assign(new userdata(),a);
		console.log(readclass)

		let gem = readclass.credit; //コイン一時保存
		readclass.give_credit(count);//count分を追加する
		
		Serializer.Serialize(id,readclass);//ファイル保存
		await interaction.reply(`
		送信しました:${target.username}
		送信したコイン:${count}
		所有コイン数：${readclass.credit}`);
	},
};
