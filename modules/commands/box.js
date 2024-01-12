module.exports.config = {
  name: "box",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "HungCho (Khánh Milo Fix)",
    description: "box config",
  commandCategory: "Tiện Ích",
  usages: "",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":""
}
};

module.exports.run = async({api, event, args}) => {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
   if (args.length == 0) return api.sendMessage(`Box Config\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n◇ box emoji [icon] : thay icon nhóm\n◇ box name [text] : thay đổi tên nhóm\n◇ box image [ảnh reply] : thay đổi ảnh nhóm\n◇ box admin [tag] : thêm người được tag làm QTV`, event.threadID, event.messageID);


  if (args[0] == "name") {
var content = args.join(" ");
var c = content.slice(4, 99) || event.messageReply.body;
api.setTitle(`${c } `, event.threadID);
 }
  if (args[0] == "emoji") {
const name = args[1] || event.messageReply.body;
api.changeThreadEmoji(name, event.threadID)

 }
if(args[0] == "me"){
   if (args[1] == "admin") {
    const threadInfo = await api.getThreadInfo(event.threadID)
    const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
    if(!find) api.sendMessage("Bot cần quyền QTV", event.threadID, event.messageID)
    else if(!global.config.ADMINBOT.includes(event.senderID)) api.sendMessage("Quyền không đủ để thực hiện", event.threadID, event.messageID)
     else api.changeAdminStatus(event.threadID, event.senderID, true);
     }
} 
if (args[0] == "admin") {

if (args.join().indexOf('@') !== -1){
   namee = Object.keys(event.mentions)}
else namee = args[1]
if (event.messageReply) {namee = event.messageReply.senderID}

const threadInfo = await api.getThreadInfo(event.threadID)
const findd = threadInfo.adminIDs.find(el => el.id == namee);
const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
const finddd = threadInfo.adminIDs.find(el => el.id == event.senderID);

if (!finddd) return api.sendMessage("Quyền không đủ để thực hiện lệnh", event.threadID, event.messageID);		
if(!find) {api.sendMessage("Bot cần quyền QTV", event.threadID, event.messageID)}
if (!findd) {api.changeAdminStatus(event.threadID, namee, true);}
else api.changeAdminStatus(event.threadID, namee, false)
 }

if (args[0] == "image") {

if (event.type !== "message_reply") return api.sendMessage("Rely ảnh cần đặt", event.threadID, event.messageID);
  if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("Reply ảnh cần đặt", event.threadID, event.messageID);
  if (event.messageReply.attachments.length > 1) return api.sendMessage(`Chỉ reply một ảnh thôi`, event.threadID, event.messageID);
   var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/boximagee.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/boximagee.png"));	
      return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname+'/cache/boximagee.png')).on('close',() => callback());
      };	  
}