const fs = require('fs');
const { SlashCommandBuilder } = require('discord.js');
const userdata = require('../server_user');

exports.findPath = async function(id)
{
		const path = `./user/${id}.json`;//DiscordのIDがファイルパスになる
		console.log(path)/*DEBUG*/

		if (fs.existsSync(path))
		{
			console.log('ファイル・ディレクトリは存在します。');
            let _user = Deserialize(id);
            let newclass = Object.assign(new userdata(),_user);
            console.log(newclass);
            return newclass;
		}
		 else
		{
           console.log("存在しません");
           FileMake(id)
        }
}

async function FileMake(id)
{
    const path = `./user/${id}.json`;//DiscordのIDがファイルパスになる

    let _user = new userdata();
    let s_obj = JSON.stringify(_user);
    
    try
    {
        fs.writeFile(path, `${s_obj}`, function (err)
        {
            if (err) { throw err; }
            console.log(`${path}を生成`);
        });
    }
    catch
    {
        console.log("書き込みエラー")
        return;
    }
}

exports.Serialize = async function(id,data)
{
    const path = `./user/${id}.json`;//DiscordのIDがファイルパスになる

    let _user = new userdata();
    _user = data;
    
    fs.writeFile(path,  JSON.stringify(_user, null, '    '), function (err)
    {
        if (err) { throw err; }
        console.log(`${path}をserializeしました`);
    });
}

exports.Deserialize = async function(id)
{
    const path = `./user/${id}.json`;//DiscordのIDがファイルパスになる
    const data = JSON.parse(fs.readFileSync(path));//.json -> object
    return data;
 
}