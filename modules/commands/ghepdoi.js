module.exports.config = {
  name: "ghepdoi",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "M-Drasew, HungCho", 
  description: "Ghép đôi có chọn giới tính",
  commandCategory: "Giải Trí", 
  usages: "◉ !ɢʜᴇᴘᴅᴏɪ", 
  cooldowns: 10
};
module.exports.run = async ({ api, event, handleReply, Users, Currencies }) => {
const { threadID, messageID, senderID } = event;
/*var data = await Currencies.getData(event.senderID);
var money = data.money
if( money = 0) api.sendMessage(`◉ ɢʜᴇ́ᴘ ᴄᴀ̂̀ɴ 100000$, sᴏ̂́ ᴛɪᴇ̂̀ɴ ʙᴀ̣ɴ ʜɪᴇ̣̂ɴ ᴄᴏ́: ${money}$`,threadID,messageID)
  else {
  Currencies.setData(event.senderID, options = {money: money - 100000})*/
	return api.sendMessage(`「 ᴘᴀɪʀɪɴɢ 」\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n ◉ ʀᴇᴘʟʏ ᴛɪɴ ɴʜᴀ̆́ɴ ᴄʜᴏ̣ɴ "ɴᴀᴍ" ʜᴏᴀ̣̆ᴄ "ɴᴜ̛̃"`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "tinder",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
     })
   }
module.exports.handleReply = async ({ api, event, handleReply, Users, Currencies }) => {
var token = `6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const tile = (Math.random() * 50)+50;
const emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍"];
const random = ["ᴄʜᴜ́ᴄ 2 ʙᴀ̣ɴ ᴄᴏ́ ᴛʜᴇ̂̉ ᴠᴇ̂̀ ʙᴇ̂ɴ ɴʜᴀᴜ ɴʜᴀ "];
    switch(handleReply.type) {
        case "tinder": {
          switch(event.body) {
          case "trai":
          case "nam":
          case "Trai":
					case "Nam": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`◉ ᴄʜᴏ̛̀ ᴛɪ̀ᴍ ɴɢᴜ̛ᴏ̛̀ɪ ᴘʜᴜ̀ ʜᴏ̛̣ᴘ ᴠᴏ̛́ɪ ʙᴀ̣ɴ...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/C5cnuvK.png`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `           「 ᴘᴀɪʀɪɴɢ 」\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n ◉ ɢʜᴇ́ᴘ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ \n ◉ ᴛɪ̉ ʟᴇ̣̂ ʜᴏ̛̣ᴘ ɴʜᴀᴜ : ${tile.toFixed(2)}%\n ◉ ${random[Math.floor(Math.random() * random.length)]}\n ◉ `+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+"", mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
          case "gái":
          case "nữ":
					case "Gái": 
          case "Nữ": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`◉ ᴄʜᴏ̛̀ ᴛɪ̀ᴍ ɴɢᴜ̛ᴏ̛̀ɪ ᴘʜᴜ̀ ʜᴏ̛̣ᴘ ᴠᴏ̛́ɪ ʙᴀ̣ɴ...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/C5cnuvK.png`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `           「 ᴘᴀɪʀɪɴɢ 」\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n ◉ ɢʜᴇ́ᴘ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ\n️ ◉ ᴛɪ̉ ʟᴇ̣̂ ʜᴏ̛̣ᴘ ɴʜᴀᴜ : ${tile.toFixed(2)}%\n ◉ ${random[Math.floor(Math.random() * random.length)]}\n ◉ `+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+"", mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
        }
      }
    }
}