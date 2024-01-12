module.exports.config = {
  name: "bank",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Judas",
  description: "ɴɢᴀ̂ɴ ʜᴀ̀ɴɢ ᴛᴀ̀ɪ ᴄʜɪ́ɴʜ",
  commandCategory: "Tiện Ích",
  usages: "◉ !ʙᴀɴᴋ",
  cooldowns: 3
};
const laisuat = 0.05
const timeIM = 500
async function makeimg(i){
  console.log(i)
  const x = `${i}`
   const fs = require('fs');
const axios = require('axios')
 if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };
    const { loadImage, createCanvas, registerFont } = require("canvas");
    let path = __dirname + "/cache/atmaraxy.png";
    let bg = (await axios.get(`https://imgur.com/wrS74gQ.jpg`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    let bgBase = await loadImage(path);
    let canvas = createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
        family: "SplineSans-Medium"
    });
    registerFont(__dirname+`/cache/SplineSans.ttf`, {
        family: "SplineSans"
    });
    ctx.font = "50px SplineSans-Medium";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText('' + `${i}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ', 530, 359);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
    return path;
}
function replace(i) {
  var u = `${i}`
  var x = u.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return x
}
module.exports.onLoad = function({ }) {
  const { existsSync, writeFileSync } = require('fs-extra')
  const { join } = require('path');
  const pathData = join(__dirname, "cache", "bankmirai.json");
  if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8");
}
module.exports.run = async ({ event, api, Currencies, args, Users, permssion }) => {
  const axios = require('axios')
  var msg = [];
  var date = new Date();
  var duocsui = date.getDay();
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD:MM:YYYY");
  const stk = String(Math.floor(Math.random() * (900000000)) + 1000000)
  const { threadID, messageID, senderID, mentions } = event;
  const { readFileSync, writeFileSync, unlinkSync, createReadStream } = require("fs-extra");
  var lozz = (await Users.getData(senderID)).name
  const { join } = require("path")
  const pathData = join(__dirname, "cache", "bankmirai.json");
  const user = (args.slice(1, args.length)).join(" ");
  var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
  var userData = dataJson.find(item => item.senderID == senderID) || { senderID: senderID, name: lozz, money: 500000, stk: stk, time: timeNow, status: true, vay: { solan: 0, davay: false, sotien: 0, noxau: false, time: "" } };
  const moneyUser = (await Currencies.getData(senderID)).money
  if (duocsui == "9") {
    return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ ɴᴀʏ ᴄɴ ᴋʜᴏ̂ɴɢ ʟᴀ̀ᴍ ᴠɪᴇ̣̂ᴄ`, threadID, messageID)
  }
  if (args[0] == '-r' || args[0] == 'register') {
    if (!dataJson.some(i => i.senderID == senderID)) {
      dataJson.push(userData);
      writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
      return api.sendMessage(`[ sᴜᴄᴄᴇss ] ➜ ᴛᴀ̣ᴏ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ, sᴏ̂́ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ᴄᴜ̉ᴀ ʙᴀ̣ɴ ʟᴀ̀${stk}, ᴄʜᴜ́ɴɢ ᴛᴏ̂ɪ ᴄʜᴏ ʙᴀ̣ɴ 500000$ ᴠᴀ̀ ʙᴀ̣ɴ ᴘʜᴀ̉ɪ ɢᴜ̛̉ɪ ɪ́ᴛ ɴʜᴀ̂́ᴛ 500000$ ᴍᴏ̛́ɪ ᴄᴏ́ ʟᴀ̃ɪ💰\n[ ${timeNow} ]`, threadID, messageID)
    }
    else return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ ᴛᴀ̀ɪ ᴋʜᴏ̉ᴀɴ ᴄᴜ̉ᴀ ʙᴀ̣ɴ ᴛᴀ̣ᴏ ᴛᴜ̛̀ ᴛʀᴜ̛ᴏ̛́ᴄ ʀᴏ̂̀ɪ🏦`, threadID, messageID)
  }
  if (args[0] == "vay") {
    if (userData.vay.solan == 5 || userData.status == false) { return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ ʙᴀ̣ɴ ${userData.vay.solan == 5 ? "ᴠᴀʏ ǫᴜᴀ́ 5 ʟᴀ̂̀ɴ" : "ᴅɪ́ɴʜ ɴᴏ̛̣ xᴀ̂́ᴜ"} ɴᴇ̂ɴ ᴋʜᴏ̂ɴɢ ᴛʜᴇ̂̉ ᴛɪᴇ̂́ᴘ ᴛᴜ̣ᴄ ᴠᴀʏ`, threadID, messageID) }
    if (!dataJson.find(i => i.senderID == senderID)) { return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ ʙᴀ̣ɴ ᴄʜᴜ̛ᴀ ᴄᴏ́ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ᴛʀᴇ̂ɴ ʜᴇ̣̂ ᴛʜᴏ̂́ɴɢ ᴍɪʀᴀɪ ʙᴀɴᴋ🏦\n[ ${timeNow} ]`, threadID) }
    if (isNaN(args[1]) || !args[1]) { return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ sᴏ̂́ ᴛɪᴇ̂̀ɴ ʙᴀ̣ɴ ɴʜᴀ̣̂ᴘ ᴋʜᴏ̂ɴɢ ᴄʜɪ́ɴʜ xᴀ́ᴄ`, threadID) }
    if (args[1] < 500000 || args[1] > 50000000000000) { return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ sᴏ̂́ ᴛɪᴇ̂̀ɴ ʙᴀ̣ɴ ɴʜᴀ̣̂ᴘ ${args[1] < 500000 ? "ɴʜᴏ̉ ʜᴏ̛ɴ" : "ʟᴏ̛́ɴ ʜᴏ̛ɴ"} ᴍᴜ̛́ᴄ ʏᴇ̂ᴜ ᴄᴀ̂̀ᴜ ᴠᴀʏ ᴄᴜ̉ᴀ ᴄʜᴜ́ɴɢ ᴛᴏ̂ɪ`, threadID) }
    else {
      return api.sendMessage("[ ʙᴀɴᴋɪɴɢ ] ➜ ᴠᴜɪ ʟᴏ̀ɴɢ ʀᴇᴀᴄᴛ ᴛɪɴ ɴʜᴀ̆́ɴ ɴᴀ̀ʏ xᴀ́ᴄ ᴛʜᴜ̛̣ᴄ ᴛʜᴏ̂ɴɢ ᴛɪɴ", threadID,
        async (err, info) => {
          global.client.handleReaction.push({
            thread: event.threadID,
            type: "vay",
            name: this.config.name,
            money: args[1],
            author: senderID,
            messageID: info.messageID
          });
        })
    }
  }
  if (args[0] == "trả") {
    if (!dataJson.find(i => i.senderID == senderID)) { return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ ʙᴀ̣ɴ ᴄʜᴜ̛ᴀ ᴄᴏ́ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ᴛʀᴇ̂ɴ ʜᴇ̣̂ ᴛʜᴏ̂́ɴɢ ᴍɪʀᴀɪ ʙᴀɴᴋ🏦\n[ ${timeNow} ]`, threadID) }
    if (isNaN(args[1]) || !args[1]) { return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ sᴏ̂́ ᴛɪᴇ̂̀ɴ ʙᴀ̣ɴ ɴʜᴀ̣̂ᴘ ᴋʜᴏ̂ɴɢ ᴄʜɪ́ɴʜ xᴀ́ᴄ`, threadID) }
    const tra_v = parseInt(userData.vay.sotien) - parseInt(args[1]);
    if (tra_v < -1) { return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ sᴏ̂́ ᴛɪᴇ̂̀ɴ ʟᴀ̂̀ɴ ᴛʀᴜ̛ᴏ̛́ᴄ ᴠᴀʏ ʟᴀ̀ ${replace(parseInt(userData.vay.sotien))}$, ʜᴀ̃ʏ ɴʜᴀ̣̂ᴘ ᴄʜᴜᴀ̂̉ɴ sᴏ̂́ ᴛɪᴇ̂̀ɴ`, threadID, messageID) }
    if (userData.vay.sotien == 0) { return api.sendMessage('[ ʙᴀɴᴋɪɴɢ ] ➜ ᴛʀᴀ̉ ʜᴇ̂́ᴛ ɴᴏ̛̣', threadID) }
    else {
      return api.sendMessage("[ ʙᴀɴᴋɪɴɢ ] ➜ ᴠᴜɪ ʟᴏ̀ɴɢ ʀᴇᴀᴄᴛ ᴛɪɴ ɴʜᴀ̆́ɴ ɴᴀ̀ʏ xᴀ́ᴄ ᴛʜᴜ̛̣ᴄ ᴛʜᴏ̂ɴɢ ᴛɪɴ", threadID,
        async (err, info) => {
          global.client.handleReaction.push({
            thread: event.threadID,
            type: "tra",
            name: this.config.name,
            money: args[1],
            author: senderID,
            messageID: info.messageID
          });
        })
    }
  }
  if (args[0] == 'all' || args[0] == '-a') {
    for (let stt in dataJson) {
      var title = dataJson[stt].stk;
      var name = dataJson[stt].name;
      var sender = dataJson[stt].senderID;
      msg += `[👤] Chủ: ${name}\n[👑]➜ SenderID: ${sender}\n[💳]➜ STK: ${title}\n──────⊹⊱✫⊰⊹──────
\n`
    }
    return api.sendMessage({ body: msg }, event.threadID);
  }
  if (args[0] == "gửi" || args[0] == "send") {
    var money = args[1];
    if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ ʙᴀɴᴋɪɴɢ ] ➜ ɴʜᴀ̣̂ᴘ ǫᴜᴀ́ sᴏ̂́ ᴛɪᴇ̂̀ɴ ʙᴀ̣ɴ ʜɪᴇ̣̂ɴ ᴄᴏ́, ᴠᴜɪ ʟᴏ̀ɴɢ ɴʜᴀ̣̂ᴘ ʟᴀ̣ɪ", threadID, messageID);
    if (moneyUser < money) return api.sendMessage(`[ ʙᴀɴᴋɪɴɢ ] ➜ ᴛʜɪᴇ̂́ᴜ ᴛɪᴇ̂̀ɴ ᴋʜᴏ̂ɴɢ ᴛʜᴇ̂̉ ɢᴅ`, threadID, messageID);
    if (!userData) { return api.sendMessage('[ ʙᴀɴᴋɪɴɢ ] ➜ ᴛᴀ̣ᴏ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ɴɢᴀ̂ɴ ʜᴀ̀ɴɢ ᴄʜᴜ̛ᴀ?', threadID, messageID) }
    else {
      return api.sendMessage("[ ʙᴀɴᴋɪɴɢ ] ➜ ᴠᴜɪ ʟᴏ̀ɴɢ ʀᴇᴀᴄᴛ ᴛɪɴ ɴʜᴀ̆́ɴ ɴᴀ̀ʏ xᴀ́ᴄ ᴛʜᴜ̛̣ᴄ ᴛʜᴏ̂ɴɢ ᴛɪɴ", threadID,
        async (err, info) => {
          global.client.handleReaction.push({
            thread: event.threadID,
            type: "send",
            name: this.config.name,
            send: money,
            author: senderID,
            messageID: info.messageID
          });
        })
    }
  }
  if (args[0] == "rút") {
    var money = args[1];
    if (!money || money < 500000 || isNaN(money)) return api.sendMessage("[ ʙᴀɴᴋɪɴɢ ] ➜ sᴏ̂́ ᴛɪᴇ̂̀ɴ ᴠᴜ̛ᴏ̛̣ᴛ ǫᴜᴀ́ sᴏ̂́ ᴛɪᴇ̂̀ɴ ʙᴀ̣ɴ ɢᴜ̛̉ɪ", threadID, messageID);
    if (userData.money < money) return api.sendMessage(`[ ʙᴀɴᴋɪɴɢ ] ➜ ᴛɪᴇ̂̀ɴ ᴋʜᴏ̂ɴɢ ᴛʜᴇ̂̉ ʀᴜ́ᴛ`, threadID, messageID);
    if (!userData) { return api.sendMessage('[ ʙᴀɴᴋɪɴɢ ] ➜ ᴛᴀ̣ᴏ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ᴄʜᴜ̛ᴀ?', threadID, messageID) }
    else {
      return api.sendMessage("[ ʙᴀɴᴋɪɴɢ ] ➜ ᴠᴜɪ ʟᴏ̀ɴɢ ʀᴇᴀᴄᴛ ᴛɪɴ ɴʜᴀ̆́ɴ ɴᴀ̀ʏ xᴀ́ᴄ ᴛʜᴜ̛̣ᴄ ᴛʜᴏ̂ɴɢ ᴛɪɴ", threadID,
        async (err, info) => {
          global.client.handleReaction.push({
            thread: event.threadID,
            type: "rut",
            name: this.config.name,
            send: money,
            author: senderID,
            messageID: info.messageID
          });
        })
    }
  }
  if (args[0] == "top") {
    var i = 0
    var option = parseInt(1000);
    var data, msg = "";
    dataJson.sort((a, b) => {
      if (a.money > b.money) return -1;
      if (a.money < b.money) return 1;
    })
    if (dataJson.length < option) option = dataJson.length;
    for (const dataUser of dataJson) {
      if (i == option) break;
      msg += `[👑]➜ ᴛᴏᴘ ${i + 1}\n[👤]➜ ɴᴀᴍᴇ: ${dataUser.name}\n[✨]➜ ᴜɪᴅ: ${dataUser.senderID}\n[⚡]➜ sᴛᴋ: ${dataUser.stk}\n[💵]➜ ᴠᴏ̛́ɪ ${replace(dataUser.money)}$\n──────⊹⊱✫⊰⊹──────
\n`;
      i += 1;
    }
    return api.sendMessage(msg, threadID)
  }
  if (args[0] == 'pay' || args == '-p') {
    var userStk = dataJson.find(i => i.stk == args[1])
    if (!userStk) return api.sendMessage('[ ᴡᴀʀɴɪɴɢ ] ➜ ɴᴏᴛ ғᴏᴜɴᴅ', threadID, messageID)
    else {
      return api.sendMessage('[ ʙᴀɴᴋɪɴɢ ] ➜ ᴠᴜɪ ʟᴏ̀ɴɢ ʀᴇᴘʟʏ ᴛɪɴ ɴʜᴀ̆́ɴ Đᴇ̂̉ ɴʜᴀ̣̂ᴘ sᴏ̂́ ᴛɪᴇ̂̀ɴ ᴍᴜᴏ̂́ɴ ᴄʜᴜʏᴇ̂̉ɴ', threadID, (error, info) => {
        return global.client.handleReply.push({
          name: this.config.name,
          type: "pay",
          messageID: info.messageID,
          author: senderID,
          stk: userStk.stk
        })
        messageID
      })
    }
  }
  if (args[0] == 'check' || args[0] == 'coins') {
    if (Object.keys(event.mentions).length == 1) {
      var mention = (Object.keys(mentions))[0];
      var users = dataJson.find(item => item.senderID == mention)
      if (!dataJson.find(i => i.senderID == mention)) return api.sendMessage('[ ᴡᴀʀɴɪɴɢ ] ➜ ᴄʜᴜ̛ᴀ ᴛᴀ̣ᴏ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ʙᴀɴᴋɪɴɢ🏦', threadID, messageID)
      return api.sendMessage(`[ ᴡᴀʀɴɪɴɢ ] ➜ ʙᴀ̣ɴ ᴋʜᴏ̂ɴɢ ᴘʜᴀ̉ɪ ᴄʜᴜ̉ ɴʜᴀ̂ɴ ᴄᴜ̉ᴀ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ɴᴀ̀ʏ ᴠɪ̀ ᴠᴀ̣̂ʏ ɴᴇ̂́ᴜ ʙᴀ̣ɴ ᴍᴜᴏ̂́ɴ xᴇᴍ ᴛʜᴏ̂ɴɢ ᴛɪɴ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ɴᴀ̀ʏ ᴛʜɪ̀ ᴋᴇ̂ᴜ ${users.name} ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ʀᴇᴀᴄᴛ ɴᴀ̀ʏ ɴʜᴇ́`, threadID, (error, info) => {
        return global.client.handleReaction.push({
          name: this.config.name,
          type: "check",
          messageID: info.messageID,
          author: mention,
        })
        messageID
      })
    }
    else {
      if (!dataJson.find(i => i.senderID == senderID)) { return api.sendMessage('[ ᴡᴀʀɴɪɴɢ ] ➜ ᴄʜᴜ̛ᴀ ᴛᴀ̣ᴏ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ʙᴀɴᴋɪɴɢ🏦', threadID, messageID) }
      var userMoney = userData.money;
      var userStk = userData.stk;
      return makeimg(userMoney).then(path => api.sendMessage({ body: `[ sᴜᴄᴄᴇss ] ➜ sᴏ̂́ ᴛɪᴇ̂̀ɴ ʙᴀ̣ɴ ɢᴜ̛̉ɪ ᴍɪʀᴀɪ ʙᴀɴᴋ ʟᴀ̀: ${replace(userMoney)}$\n➜ ɴɢᴀ̀ʏ ᴛʜᴀᴍ ɢɪᴀ: ${userData.time}\n➜ xᴀ́ᴄ ᴛʜᴜ̛̣ᴄ ${userData.status}\n➜ sᴏ̂́ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ʟᴀ̀: ${userStk}\n➜ ʟᴀ̃ɪ: +${laisuat * 100}% ᴛʀᴏɴɢ ${12000 / 60} ᴘʜᴜ́ᴛ`, attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID));
    }
  } else {
    const t = (await axios.get(`https://imgur.com/I8Vxc8z.png`, {
      responseType: "stream"
    })).data;

    return api.sendMessage({
      body: "「 ᴍɪʀᴀɪ ʙᴀɴᴋɪɴɢ 」\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n ◉ !ʙᴀɴᴋ ʀᴇɢɪsᴛᴇʀ : ᴛᴀ̣ᴏ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ\n !ʙᴀɴᴋ ᴄʜᴇᴄᴋ : xᴇᴍ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ\n !ʙᴀɴᴋ ᴠᴀʏ : ᴠᴀʏ ᴛɪᴇ̂̀ɴ \n !ʙᴀɴᴋ ᴛʀᴀ : ᴛʀᴀ̉ ɴᴏ̛̣ \n !ʙᴀɴᴋ ᴘᴀʏ : ᴄʜᴜʏᴇ̂̉ɴ ᴛɪᴇ̂̀ɴ\n !ʙᴀɴᴋ ʀᴜᴛ : ʀᴜ́ᴛ ᴛɪᴇ̂̀ɴ",
      attachment: t
    }, threadID)
  }
}
module.exports.handleReply = async function({ api, event, args, handleReply, Threads, Users, Currencies }) {
  if (handleReply.author !== event.senderID) return
  const { readFileSync, writeFileSync, unlinkSync, createReadStream } = require("fs-extra");
  const { join } = require("path")
  const pathData = join(__dirname, "cache", "bankmirai.json");
  var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
  var userData = dataJson.find(item => item.senderID == event.senderID)
  if (!event.body || event.body < 50 || isNaN(event.body)) return api.sendMessage("[ ʙᴀɴᴋɪɴɢ ] ➜ sᴏ̂́ ᴛɪᴇ̂̀ɴ ɴʜᴀ̣̂ᴘ ᴄʜᴜ̛ᴀ ᴄʜɪ́ɴʜ xᴀ́ᴄ", event.threadID);
  if (userData.money < event.body) return api.sendMessage(`[ ʙᴀɴᴋɪɴɢ ] ➜ ᴛɪᴇ̂̀ɴ ᴄᴏ̀ɴ ᴛʜɪᴇ̂́ᴜ, ᴋʜᴏ̂ɴɢ ᴛʜᴇ̂̉ ɢɪᴀᴏ ᴅɪ̣ᴄʜ`, event.threadID);
  return api.sendMessage(`[ ʙᴀɴᴋɪɴɢ ] ➜ sᴏ̂́ ᴛɪᴇ̂̀ɴ ᴄᴀ̂̀ɴ ᴄʜᴜʏᴇ̂̉ɴ ʟᴀ̀ ${replace(event.body)}, ʀᴇᴀᴄᴛ ᴛɪɴ ɴʜᴀ̆́ɴ ɴᴀ̀ʏ ɴᴇ̂́ᴜ ᴍᴜᴏ̂́ɴ ʜᴏᴀ̀ɴ ᴛʜᴀ̀ɴʜ ɢɪᴀᴏ ᴅɪ̣ᴄʜ`, event.threadID, (err, info) => {
    if (err) console.log(err)
    return global.client.handleReaction.push({
      name: this.config.name,
      type: "pay",
      money: event.body,
      author: handleReply.author,
      stk: handleReply.stk,
      messageID: info.messageID
    })
    messageID
  })
}
module.exports.handleReaction = async function({ event, api, handleReaction, Currencies, Users }) {
  try {
    api.unsendMessage(handleReaction.messageID);
    const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm - DD:MM:YYYY");
    var timeva = moment.tz("Asia/Ho_Chi_Minh").format("DD:MM:YYYY");
    if (handleReaction.author != event.userID) return
   const { readFileSync, writeFileSync, unlinkSync, createReadStream } = require("fs-extra");
    const { join } = require("path")
    const pathData = join(__dirname, "cache", "bankmirai.json");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var userData = dataJson.find(item => item.senderID == handleReaction.author)
    var userMoney = userData.money;
    var userstk = userData.stk;
    var money = userData.money;
    if (handleReaction.type == "check") {
      return makeimg(userMoney).then(path => api.sendMessage({ body: `[ sᴜᴄᴄᴇss ] ➜ sᴏ̂́ ᴛɪᴇ̂̀ɴ ${userData.name} ɢᴜ̛̉ɪ ᴍɪʀᴀɪ ʙᴀɴᴋ ʟᴀ̀: ${replace(userMoney)}$\n➜ ɴɢᴀ̀ʏ ᴛʜᴀᴍ ɢɪᴀ: ${userData.time}\n➜ xᴀ́ᴄ ᴛʜᴜ̛̣ᴄ ${userData.status}\n➜ sᴏ̂́ ᴛᴀ̀ɪ ᴋʜᴏᴀ̉ɴ ʟᴀ̀: ${userstk}\n➜ ʟᴀ̃ɪ: +${laisuat * 100}% ᴛʀᴏɴɢ ${12000 / 60} ᴘʜᴜ́ᴛ`, attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID));
    }
    if (handleReaction.type == "send") {
      userData.money = parseInt(userMoney) + parseInt(handleReaction.send);
      writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
      await Currencies.decreaseMoney(event.userID, parseInt(handleReaction.send))
      return api.sendMessage(`[ sᴜᴄᴄᴇss ] ➜ ʙᴀ̣ɴ ɢᴜ̛̉ɪ ${replace(handleReaction.send)}$ ᴠᴀ̀ᴏ ᴍɪʀᴀɪ ʙᴀɴᴋ\n💷 ʟᴀ̃ɪ: +${laisuat * 100}% ᴛʀᴏɴɢ ${timeIM / 60} ᴘʜᴜ́ᴛ\n[ ${timeNow} ]`, event.threadID)
    }
    if (handleReaction.type == "rut") {
      userData.money = parseInt(userMoney) - parseInt(handleReaction.send);
      writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
      await Currencies.increaseMoney(event.userID, parseInt(handleReaction.send))
      return api.sendMessage(`[ sᴜᴄᴄᴇss ] ➜ ʙᴀ̣ɴ ʀᴜ́ᴛ ${replace(handleReaction.send)}$ ᴛᴜ̛̀ ᴍɪʀᴀɪ ʙᴀɴᴋ\n[ ${timeNow} ]`, event.threadID)
    }
    if (handleReaction.type == "pay") {
      var userStk = dataJson.find(i => i.stk == handleReaction.stk)
      var lmao = userStk.money;
      userStk.money = parseInt(lmao) + parseInt(handleReaction.money);
      userData.money = parseInt(money) - parseInt(handleReaction.money)
      writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
      return api.sendMessage(`[ SUCCESS ] ➜ ᴄʜᴜʏᴇ̂̉ɴ ᴛɪᴇ̂̀ɴ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ ${replace(parseInt(handleReaction.money))}$, sᴏ̂́ ᴅᴜ̛ ᴄᴏ̀ɴ ʟᴀ̣ɪ ʟᴀ̀ ${replace(parseInt(money) - parseInt(handleReaction.money))}$\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n[ ${timeNow} ]`, event.threadID)
    }
    if (handleReaction.type == "vay") {
      if (userData.vay.solan == 0) {
        userData.vay.davay = true
        userData.vay.time = `${timeva}`
        userData.vay.sotien = parseInt(userData.vay.sotien) + parseInt(handleReaction.money)
        userData.vay.solan = parseInt(userData.vay.solan) + 1
      } else {
        userData.vay.sotien = parseInt(userData.vay.sotien) + parseInt(handleReaction.money)
        userData.vay.solan = parseInt(userData.vay.solan) + 1
      }
      writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
      await Currencies.increaseMoney(event.userID, parseInt(handleReaction.money))
      return api.sendMessage(`[ sᴜᴄᴄᴇss ] ➜ ᴠᴀʏ ᴛɪᴇ̂̀ɴ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ ${replace(parseInt(userData.vay.sotien))}$`, event.threadID)
    }
    if (handleReaction.type == "tra") {
      if ((parseInt(userData.vay.sotien) - parseInt(handleReaction.money)) == 0) {
        userData.vay.davay = false
        userData.vay.time = ""
        userData.vay.sotien = parseInt(userData.vay.sotien) - parseInt(handleReaction.money)
        userData.vay.solan = 0
      } else {
        userData.vay.sotien = parseInt(userData.vay.sotien) - parseInt(handleReaction.money)
      }
      writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
      await Currencies.decreaseMoney(event.userID, parseInt(handleReaction.money))
      return api.sendMessage(`[ sᴜᴄᴄᴇss ] ➜ ᴛʀᴀ̉ ᴠᴀʏ ᴛɪᴇ̂̀ɴ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ ${replace(parseInt(userData.vay.sotien))}$`, event.threadID)
    }
  } catch (e) {
    console.log(e)
  }
}
/////////////////////////////////////////////////////////
async function nhantien() {
  const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
  const { join, resolve } = require('path');
  const pathData = join(__dirname, "cache", "bankmirai.json");
  const user = require('./cache/bankmirai.json');
  if (user[0] == undefined) return
  while (true) {
    for (let id of user) {
      var userData = user.find(i => i.senderID == id.senderID);
      var money = userData.money;
      userData.money = (parseInt(money + money * laisuat))
      writeFileSync(pathData, JSON.stringify(user, null, 2));
    }
    console.log("");
    await new Promise(resolve => setTimeout(resolve, `${timeIM}` * 1000))
  }
}
async function vay() {
  const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
  const { join, resolve } = require('path');
  const pathData = join(__dirname, "cache", "bankmirai.json");
  const user = require('./cache/bankmirai.json');
  if (user[0] == undefined) return
  while (true) {
    for (let id of user) {
      var userData = user.find(i => i.senderID == id.senderID);
      if (userData.vay.davay == true) {
        var money = userData.vay.sotien;
        userData.vay.sotien = (parseInt(money + money * 0.05))
        writeFileSync(pathData, JSON.stringify(user, null, 2));
      }
    }
    console.log("");
    await new Promise(resolve => setTimeout(resolve, `${timeIM}` * 1000))
  }
}
async function checkvay() {
  const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
  const { join, resolve } = require('path');
  const pathData = join(__dirname, "cache", "bankmirai.json");
  const user = require('./cache/bankmirai.json');
  if (user[0] == undefined) return
  while (true) {
    for (let id of user) {
      var userData = user.find(i => i.senderID == id.senderID);
      const gb = userData.vay.time.split("/")
      const t = Date.parse(new Date()) - Date.parse(`${gb[1]} ${gb[0]}, ${gb[2]} 00:00:00`)
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (userData.vay.davay == true) {
        if (days == 7) {
          userData.status = false
          userData.vay.noxau = true
          userData.vay.sotien = (parseInt(money + money * 0.05))
          writeFileSync(pathData, JSON.stringify(user, null, 2));
        }
      }
    }
    console.log("");
    await new Promise(resolve => setTimeout(resolve, `${timeIM}` * 1000))
  }
}
nhantien();
vay();
checkvay();