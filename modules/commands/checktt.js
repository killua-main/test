module.exports.config = {
  name: "checktt",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "DungUwU && Nghĩa",
  description: "ᴄʜᴇᴄᴋ ᴛᴜ̛ᴏ̛ɴɢ ᴛᴀ́ᴄ ɴɢᴀ̀ʏ/ᴛᴜᴀ̂̀ɴ/ᴛᴏᴀ̀ɴ ʙᴏ̣̂",
  commandCategory: "Tiện Ích",
  usages: "◉ !ᴄʜᴇᴄᴋᴛᴛ ( ᴅᴀʏ/ᴡᴇᴇᴋ/ᴀʟʟ)\n◉ !ᴄʜᴇᴄᴋᴛᴛ ʟᴏᴄᴍᴇᴍ + sᴏ̂́ ʟᴜ̛ᴏ̛̣ɴɢ ᴛɪɴ ɴʜᴀ̆́ɴ",
  cooldowns: 5,
  dependencies: {
    "fs": " ",
    "moment-timezone": " "
  }
};

const path = __dirname + '/checktt/';
const moment = require('moment-timezone');

module.exports.onLoad = () => {
  const fs = require('fs');
  if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
    fs.mkdirSync(path, { recursive: true });
  }
  setInterval(() => {
    const today = moment.tz("Asia/Ho_Chi_Minh").day();
    const checkttData = fs.readdirSync(path);
    checkttData.forEach(file => {
      try { var fileData = JSON.parse(fs.readFileSync(path + file)) } catch { return fs.unlinkSync(path+file) };
      if (fileData.time != today) {
        setTimeout(() => {
          fileData = JSON.parse(fs.readFileSync(path + file));
          if (fileData.time != today) {
            fileData.time = today;
            fs.writeFileSync(path + file, JSON.stringify(fileData, null, 4));
          }
        }, 60 * 1000);
      }
    })
  }, 60 * 1000);
}

module.exports.handleEvent = async function({ api, event, Threads }) {
  try{
  if (!event.isGroup) return;
  if (global.client.sending_top == true) return;
  const fs = global.nodemodule['fs'];
  const { threadID, senderID } = event;
  const today = moment.tz("Asia/Ho_Chi_Minh").day();

  if (!fs.existsSync(path + threadID + '.json')) {
    var newObj = {
      total: [],
      week: [],
      day: [],
      time: today,
      last: {
        time: today,
        day: [],
        week: [],
      },
    };
    fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));} else {
      var newObj = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    }
    //const threadInfo = await Threads.getInfo(threadID) || {};
    if (true/*threadInfo.hasOwnProperty('isGroup') && threadInfo.isGtrue*/) {
      const UserIDs = event.participantIDs || [];
      if (UserIDs.length!=0)for (let user of UserIDs) {
        if (!newObj.last)newObj.last = {
          time: today,
          day: [],
          week: [],
        };
        if (!newObj.last.week.find(item => item.id == user)) {
          newObj.last.week.push({
            id: user,
            count: 0
          });
        }
        if (!newObj.last.day.find(item => item.id == user)) {
          newObj.last.day.push({
            id: user,
            count: 0
          });
        }
        if (!newObj.total.find(item => item.id == user)) {
          newObj.total.push({
            id: user,
            count: 0
          });
        }
        if (!newObj.week.find(item => item.id == user)) {
          newObj.week.push({
            id: user,
            count: 0
          });
        }
        if (!newObj.day.find(item => item.id == user)) {
          newObj.day.push({
            id: user,
            count: 0
          });
        }
      }
    };
    fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
  
  const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
  if (threadData.time != today) {
    global.client.sending_top = true;
    setTimeout(() => global.client.sending_top = false, 5 * 60 * 1000);
  }
  const userData_week_index = threadData.week.findIndex(e => e.id == senderID);
  const userData_day_index = threadData.day.findIndex(e => e.id == senderID);
  const userData_total_index = threadData.total.findIndex(e => e.id == senderID);
  if (userData_total_index == -1) {
    threadData.total.push({
      id: senderID,
      count: 1,
    });
  } else threadData.total[userData_total_index].count++;
  if (userData_week_index == -1) {
    threadData.week.push({
      id: senderID,
      count: 1
    });
  } else threadData.week[userData_week_index].count++;
  if (userData_day_index == -1) {
    threadData.day.push({
      id: senderID,
      count: 1
    });
  } else threadData.day[userData_day_index].count++;
  // if (threadData.time != today) {
  //     threadData.day.forEach(e => {
  //         e.count = 0;
  //     });
  //     if (today == 1) {
  //         threadData.week.forEach(e => {
  //             e.count = 0;
  //         });
  //     }
  //     threadData.time = today;
  // }
  let p = event.participantIDs;
    if (!!p && p.length > 0) {
      p = p.map($=>$+'');
      ['day','week','total'].forEach(t=>threadData[t] = threadData[t].filter($=>p.includes($.id+'')));
    };
  fs.writeFileSync(path + threadID + '.json', JSON.stringify(threadData, null, 4));
  } catch(e){};
}

module.exports.run = async function({ api, event, args, Users, Threads }) {
  await new Promise(resolve => setTimeout(resolve, 500));
  const fs = global.nodemodule['fs'];
  const { threadID, messageID, senderID, mentions } = event;
  let path_data = path + threadID + '.json';
  if (!fs.existsSync(path_data)) {
    return api.sendMessage("◉ ᴄʜᴜ̛ᴀ ᴄᴏ́ ᴅᴜ̛̃ ʟɪᴇ̣̂ᴜ", threadID);
  }
  const threadData = JSON.parse(fs.readFileSync(path_data));
  const query = args[0] ? args[0].toLowerCase() : '';

  if (query == 'box') {
    let body_ = event.args[0].replace(exports.config.name, '')+'box info';
    let args_ = body_.split(' ');
    
    arguments[0].args = args_.slice(1);
    arguments[0].event.args = args_;
    arguments[0].event.body = body_;
    
    return require('./box.js').run(...Object.values(arguments));
  } else if (query == 'reset') {
     let dataThread = (await Threads.getData(threadID)).threadInfo;
    if (!dataThread.adminIDs.some(item => item.id == senderID)) return api.sendMessage('◉ ᴍᴀ̀ʏ ᴄᴏ́ ǫᴜʏᴇ̂̀ɴ ᴀ̀?', event.threadID, event.messageID);
     fs.unlinkSync(path_data);
     return api.sendMessage(`◉ xᴏᴀ́ ᴛᴏᴀ̀ɴ ʙᴏ̣̂ ᴛᴜ̛ᴏ̛ɴɢ ᴛᴀ́ᴄ ᴄᴜ̉ᴀ ɴʜᴏ́ᴍ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ`, event.threadID);
     } else if(query == 'locmem') {
        let threadInfo = await api.getThreadInfo(threadID);
        if(!threadInfo.adminIDs.some(e => e.id == senderID)) return api.sendMessage("◉ ᴍᴀ̀ʏ ᴄᴏ́ ǫᴜʏᴇ̂̀ɴ ᴀ̀?", threadID);
        if(!threadInfo.isGroup) return api.sendMessage("◉ ᴄʜɪ̉ ᴄᴏ́ ᴛʜᴇ̂̉ sᴜ̛̉ ᴅᴜ̣ɴɢ ᴛʀᴏɴɢ ɴʜᴏ́ᴍ", threadID);
        if(!threadInfo.adminIDs.some(e => e.id == api.getCurrentUserID())) return api.sendMessage("◉ ʜᴀ̃ʏ ᴛʜᴇ̂ᴍ ʙᴏᴛ ʟᴀ̀ᴍ ǫᴛᴠ", threadID);
        if(!args[1] || isNaN(args[1])) return api.sendMessage("◉ ʟᴏ̂̃ɪ ʀᴏ̂̀ɪ", threadID);
        let minCount = +args[1],
            allUser = event.participantIDs;let id_rm = [];
        for(let user of allUser) {
            if(user == api.getCurrentUserID()) continue;
            if(!threadData.total.some(e => e.id == user) || threadData.total.find(e => e.id == user).count <= minCount) {
                await new Promise(resolve=>setTimeout(async () => {
                    await api.removeUserFromGroup(user, threadID);
                    id_rm.push(user);
                    resolve(true);
                    /*for(let e in threadData) {
                        if(e == 'time') continue;
                        if(threadData[e].some(e => e.id == user)) {
                            threadData[e].splice(threadData[e].findIndex(e => e.id == user), 1);
                        }
                    }*/
                }, 1000));
            }
        }
        return api.sendMessage(`◉ xᴏ́ᴀ ${id_rm.length} ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ ᴄᴏ́ ${minCount} ᴛɪɴ ɴʜᴀ̆́ɴ\n─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n${id_rm.map(($,i)=>`${i+1} ︱ ${global.data.userName.get($)}\n`)}`, threadID);
}

  ///////////////////small code////////////////////////////////
  var x = threadData.total.sort((a, b) => b.count - a.count);
  var o = [];
  for (i = 0; i < x.length; i++) {
    o.push({
      rank: i + 1,
      id: x[i].id,
      count: x[i].count
    })
  }
  /////////////////////////////////////////////////////////////
  var header = '',
    body = '',
    footer = '',
    msg = '',
    count = 1,
    storage = [],
    data = 0;
  if (query == 'all' || query == '-a') {
    header = '「 ᴄʜᴇᴄᴋᴛᴛ ᴀʟʟ 」\n─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────';
    data = threadData.total;

  } else if (query == 'week' || query == '-w') {
    header = '「 ᴄʜᴇᴄᴋᴛᴛ ᴡᴇᴇᴋ 」';
    data = threadData.week;
  } else if (query == 'day' || query == '-d') {
    header = '「 ᴄʜᴇᴄᴋᴛᴛ ᴅᴀʏ 」';
    data = threadData.day;
  } else {
    data = threadData.total;
  }
  for (const item of data) {
    const userName = await Users.getNameUser(item.id) || 'Facebook User';
    const itemToPush = item;
    itemToPush.name = userName;
    storage.push(itemToPush);
  };
  let check = ['all', '-a', 'week', '-w', 'day', '-d'].some(e => e == query);
  if (!check && Object.keys(mentions).length > 0) {
    //storage = storage.filter(e => mentions.hasOwnProperty(e.id));
  }
  //sort by count from high to low if equal sort by name
  storage.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    }
    else if (a.count < b.count) {
      return 1;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
if ((!check && Object.keys(mentions).length == 0) || (!check && Object.keys(mentions).length == 1) || (!check && event.type == 'message_reply')) {
        const UID = event.messageReply ? event.messageReply.senderID : Object.keys(mentions)[0] ? Object.keys(mentions)[0] : senderID;
      const uid = event.type == 'message_reply' ? event.messageReply.senderID: !!Object.keys(event.mentions)[0] ? Object.keys(event.mentions)[0]: !!args[0] ? args[0]: event.senderID;
    const userRank = storage.findIndex(e => e.id == UID);
    const userTotal = threadData.total.find(e => e.id == UID) ? threadData.total.find(e => e.id == UID).count : 0;
    const userTotalWeek = threadData.week.find(e => e.id == UID) ? threadData.week.find(e => e.id == UID).count : 0;
    const userRankWeek = threadData.week.sort((a, b) => b.count - a.count).findIndex(e => e.id == UID);
    const userTotalDay = threadData.day.find(e => e.id == UID) ? threadData.day.find(e => e.id == UID).count : 0;
    const userRankDay = threadData.week.sort((a, b) => b.count - a.count).findIndex(e => e.id == UID);
    let count_day_last = threadData.last?.day?.find($=>$.id==UID)?.count||0;
    let count_week_last = threadData.last?.week?.find($=>$.id==UID)?.count||0;
    let interaction_rate_day = (userTotalDay/count_day_last)*100;
    let interaction_rate_week = (userTotalWeek/count_week_last)*100;
    const nameUID = storage[userRank].name || 'Facebook User';
    let threadInfo = await api.getThreadInfo(event.threadID);
    nameThread = threadInfo.threadName;
    var permission;
    if (global.config.ADMINBOT.includes(UID)) permission = `ᴀᴅᴍɪɴ ʙᴏᴛ`;
    else if
      (global.config.NDH.includes(UID))
      permission = `ɴɢᴜ̛ᴏ̛̀ɪ ʜᴏ̂̃ ᴛʀᴏ̛̣`; else if (threadInfo.adminIDs.some(i => i.id == UID)) permission = `ǫᴜᴀ̉ɴ ᴛʀɪ̣ ᴠɪᴇ̂ɴ`; else permission = `ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ`;
    const target = UID == senderID ? 'ʙᴀ̣ɴ' : nameUID;
    if (userRank == -1) {
      return api.sendMessage(`${target} ᴄʜᴜ̛ᴀ ᴄᴏ́ ᴅᴜ̛̃ ʟɪᴇ̣̂ᴜ`, threadID);
    }
    body += `「 ${nameThread} 」
        ──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────
        [👤] ᴛᴇ̂ɴ : ${nameUID}
        [✨] ᴄʜᴜ̛́ᴄ ᴠᴜ̣ : ${permission}
        [💫] ᴜʀʟ ғʙ : https://www.facebook.com/profile.php?id=${UID}
        ──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────
        [💬] ᴛɪɴ ɴʜᴀ̆́ɴ ᴛʀᴏɴɢ ɴɢᴀ̀ʏ : ${userTotalDay}
        [🌾] ᴛɪ̉ ʟᴇ̣̂ ᴛᴜ̛ᴏ̛ɴɢ ᴛᴀ́ᴄ : ${isFinite(interaction_rate_day)?interaction_rate_day.toFixed(1)+'%' :'ᴄʜᴜ̛ᴀ ᴄᴏ́ ᴛɪɴ ɴʜᴀ̆́ɴ ʜᴏ̂ᴍ ǫᴜᴀ ɴᴇ̂ɴ ᴋʜᴏ̂ɴɢ ᴛʜᴇ̂̉ ᴛɪ́ɴʜ ᴛɪ̉ ʟᴇ̣̂'}
        [🥇] ʜᴀ̣ɴɢ ᴛʀᴏɴɢ ɴɢᴀ̀ʏ : ${userRankDay + 1}
        ──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────
        [💬] ᴛɪɴ ɴʜᴀ̆́ɴ ᴛʀᴏɴɢ ᴛᴜᴀ̂̀ɴ : ${userTotalWeek}
        [🌾] ᴛɪ̉ ʟᴇ̣̂ ᴛᴜ̛ᴏ̛ɴɢ ᴛᴀ́ᴄ : ${isFinite(interaction_rate_week)?interaction_rate_week.toFixed(1)+'%': 'ᴄʜᴜ̛ᴀ ᴄᴏ́ ᴛɪɴ ɴʜᴀ̆́ɴ ᴛᴜᴀ̂̀ɴ ǫᴜᴀ ɴᴇ̂ɴ ᴋʜᴏ̂ɴɢ ᴛʜᴇ̂̉ ᴛɪ́ɴʜ ᴛɪ̉ ʟᴇ̣̂'}
        [🥈] ᴛɪɴ ɴʜᴀ̆́ɴ ᴛʀᴏɴɢ ᴛᴜᴀ̂̀ɴ : ${userRankWeek + 1}
        ──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────
        [💬] ᴛᴏ̂̉ɴɢ ᴛɪɴ ɴʜᴀ̆́ɴ : ${userTotal}
        [🏆] ʜᴀ̣ɴɢ ᴛᴏ̂̉ɴɢ : ${userRank + 1}

        ◉ ᴛʜᴀ̉ "❤️" ᴠᴀ̀ᴏ ᴛɪɴ ɴʜᴀ̆́ɴ ɴᴀ̀ʏ xᴇᴍ ᴛᴏ̂̉ɴɢ ᴛɪɴ ɴʜᴀ̆́ɴ ᴄᴜ̉ᴀ ᴛᴏᴀ̀ɴ ʙᴏ̣̂ ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ ᴛʀᴏɴɢ ɴʜᴏ́ᴍ.
        `.replace(/^ +/gm, '');
    console.log(storage.reduce((a, b) => a + b.count, 0))
  } else {
    console.log((storage.filter($ => $.id == senderID))[0].count)
    body = storage.map(item => {
      let count_day_last = threadData.last?.day?.find($=>$.id=item.id)?.count||0;
    let count_week_last = threadData.last?.week?.find($=>$.id==item.id)?.count||0;
    let interaction_rate_day = (item.count/count_day_last)*100;
    let interaction_rate_week = (item.count/count_week_last)*100;
    let rate = /^day|-d$/.test(query)?interaction_rate_day:/^week|-w$/.test(query)?interaction_rate_week:false;
      return `${count++} ︱ ${item.name} ᴠᴏ̛́ɪ ${item.count} ᴛɪɴ ɴʜᴀ̆́ɴ ${rate?`(${rate.toFixed(1)}%)`:''}`;
    }).join('\n');
    const userTotalWeek = threadData.week.find(e => e.id == senderID) ? threadData.week.find(e => e.id == senderID).count : 0;
    const userTotalDay = threadData.day.find(e => e.id == senderID) ? threadData.day.find(e => e.id == senderID).count : 0;
    const tlttd = (userTotalDay / (storage.reduce((a, b) => a + b.count, 0))) * 100;
    const tlttt = (userTotalWeek / (storage.reduce((a, b) => a + b.count, 0))) * 100
    const tltt = (((storage.filter($ => $.id == senderID))[0].count) / (storage.reduce((a, b) => a + b.count, 0))) * 100
    footer = `\n[✉️] Tổng Tin Nhắn: ${storage.reduce((a, b) => a + b.count, 0)}`;
  }

  msg = `${header}\n${body}\n${footer}`;
  return api.sendMessage(msg + '\n' /*+ `→ Bạn hiện đang đứng ở hạng: ${(o.filter(id => id.id == senderID))[0]['rank']}` */ + `${query == 'all' || query == '-a' ? `[🏆] ʙᴀ̣ɴ xᴇ̂́ᴘ ʜᴀ̣ɴɢ ᴛʜᴜ̛́ : ${(o.filter(id => id.id == senderID))[0]['rank']}\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n ◉ ʀᴇᴘʟʏ ᴛɪɴ ɴʜᴀ̆́ɴ ɴᴀ̀ʏ ᴛʜᴇᴏ sᴛᴛ ᴋʜɪ ᴍᴜᴏ̂́ɴ ʟᴏ̣ᴄ ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ ᴋʜᴏ̉ɪ ɴʜᴏ́ᴍ \n◉ ${global.config.PREFIX}ᴄʜᴇᴄᴋᴛᴛ ʟᴏᴄᴍᴇᴍ + sᴏ̂́ ᴛɪɴ ɴʜᴀ̆́ɴ : ʟᴏ̣ᴄ ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ ᴛʜᴇᴏ sᴏ̂́ ᴛɪɴ ɴʜᴀ̆́ɴ \n◉ ${global.config.PREFIX}ᴄʜᴇᴄᴋᴛᴛ ʀᴇsᴇᴛ : xᴏᴀ́ ᴛᴏᴀ̀ɴ ʙᴏ̣̂ ᴅᴜ̛̃ ʟɪᴇ̣̂ᴜ ᴛɪɴ ɴʜᴀ̆́ɴ ` : ""}`, threadID, (error, info) => {

    if (error) return console.log(error)
    if (query == 'all' || query == '-a') {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        tag: 'locmen',
        thread: threadID,
        author: senderID, storage,
      })
    }
    //if((!check && Object.keys(mentions).length == 0) || (!check && Object.keys(mentions).length == 1) || (!check && event.type == 'message_reply')){
    global.client.handleReaction.push({
      name: this.config.name,
      messageID: info.messageID,
      sid: senderID,
    })
    //  }
  });
  threadData = storage = null;
}
module.exports.handleReply = async function({
  api
  , event
  , args
  , handleReply
  , client
  , __GLOBAL
  , permssion
  , Threads
  , Users
  , Currencies
}) {
  try {
    const { senderID } = event
    let dataThread = (await Threads.getData(event.threadID)).threadInfo;
    if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('◉ ᴛʜᴇ̂ᴍ ʙᴏᴛ ʟᴀ̀ᴍ ǫᴛᴠ', event.threadID, event.messageID);
    if (!dataThread.adminIDs.some(item => item.id == senderID)) return api.sendMessage('◉ ᴍᴀ̀ʏ ᴄᴏ́ ǫᴜʏᴇ̂̀ɴ ᴀ̀?', event.threadID, event.messageID);
    const fs = require('fs')
    //const threadData = JSON.parse(fs.readFileSync(path + handleReply.thread + '.json'));
    // const data = threadData["total"]
    /*var x = threadData.total.sort((a, b) => b.count - a.count);
    var o = [];
    for (i = 0; i < x.length; i++) {
      o.push({
        rank: i + 1,
        id: x[i].id,
        count: x[i].count
      })
    }
    console.log(o)*/
    let split = event.body.split(" ")

    if (isNaN(split.join(''))) return api.sendMessage(`◉ ᴅᴜ̛̃ ʟɪᴇ̣̂ᴜ ᴋʜᴏ̂ɴɢ ʜᴏ̛̣ᴘ ʟᴇ̣̂!`, event.threadID);

    let msg = [], count_err_rm = 0;
    for (let $ of split) {
      let id = handleReply?.storage[$ - 1]?.id;

      if (!!id)try {
        await api.removeUserFromGroup(id, event.threadID);
        msg.push(`${$}. ${global.data.userName.get(id)}`)
      } catch (e) {++count_err_rm;continue};
    };

    api.sendMessage(`◉ xᴏ́ᴀ ${split.length-count_err_rm} ɴɢᴜ̛ᴏ̛̀ɪ ᴅᴜ̀ɴɢ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ, ᴛʜᴀ̂́ᴛ ʙᴀ̣ɪ ${count_err_rm}\n\n${msg.join('\n')}`, handleReply.thread/*, (e, i) => {
      for (i = 0; i < split.length; i++) {
        if (e) return api.sendMessage('◉ ʜᴀ̃ʏ ʀᴇᴘʟʏ 1 ᴄᴏɴ sᴏ̂́ ʙᴀ̂́ᴛ ᴋʏ̀ ᴛʀᴏɴɢ ᴅᴀɴʜ sᴀ́ᴄʜ ᴛᴜ̛ᴏ̛ɴɢ ᴛᴀ́ᴄ', handleReply.thread)
        if (i > split.length) break;
        var oi = split[i]
        api.removeUserFromGroup(o[oi - 1].id, handleReply.thread)
      }
    }*/)

  } catch (e) {
    console.log(e)
  }
}
module.exports.handleReaction = function({ event, Users, Threads, api, handleReaction: _, Currencies }) {
  const fs = require('fs')
  if (event.userID != _.sid) return;
  if (event.reaction != "❤") return; 
  api.unsendMessage(_.messageID)
  let data = JSON.parse(fs.readFileSync(`${path}${event.threadID}.json`));
  let sort = data.total.sort((a, b) => a.count < b.count ? 0 : -1);
  api.sendMessage(`[ ᴋɪᴇ̂̉ᴍ ᴛʀᴀ ᴀʟʟ ]\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n${sort.map(($, i) => `${i + 1} ︱ ${global.data.userName.get($.id)} ᴠᴏ̛́ɪ ${$.count} ᴛɪɴ ɴʜᴀ̆́ɴ`).join('\n')}\n\n[✉️] ᴛᴏ̂̉ɴɢ ᴛɪɴ ɴʜᴀ̆́ɴ: ${data.total.reduce((s, $) => s + $.count, 0)}\n[🏆] ʙᴀ̣ɴ xᴇ̂́ᴘ ʜᴀ̣ɴɢ ᴛʜᴜ̛́ : ${sort.findIndex($ => $.id == event.userID) + 1}\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n◉ ʀᴇᴘʟʏ ᴛɪɴ ɴʜᴀ̆́ɴ ɴᴀ̀ʏ ᴛʜᴇᴏ sᴛᴛ ᴋʜɪ ᴍᴜᴏ̂́ɴ ʟᴏ̣ᴄ ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ ᴋʜᴏ̉ɪ ɴʜᴏ́ᴍ \n◉ ${global.config.PREFIX}ᴄʜᴇᴄᴋᴛᴛ ʟᴏᴄᴍᴇᴍ + sᴏ̂́ ᴛɪɴ ɴʜᴀ̆́ɴ : ʟᴏ̣ᴄ ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ ᴛʜᴇᴏ sᴏ̂́ ᴛɪɴ ɴʜᴀ̆́ɴ \n◉ ${global.config.PREFIX}ᴄʜᴇᴄᴋᴛᴛ ʀᴇsᴇᴛ : xᴏᴀ́ ᴛᴏᴀ̀ɴ ʙᴏ̣̂ ᴅᴜ̛̃ ʟɪᴇ̣̂ᴜ ᴛɪɴ ɴʜᴀ̆́ɴ `, event.threadID, (err, info) => global.client.handleReply.push({
    name: this.config.name,
    messageID: info.messageID,
    tag: 'locmen',
    thread: event.threadID,
    author: event.senderID,
    storage: sort,
  })
  );
  /*const { senderID } = event;
  const { author } = handleReaction
  const threadData = JSON.parse(fs.readFileSync(path + handleReaction.thread + '.json'));
    let dataThread = (await Threads.getData(handleReaction.thread)).threadInfo;
  var header = '',
    body = '',
    footer = '',
    msg = '',
    count = 1,
    storage = [],
    data = 0;
 header = '「 ᴄʜᴇᴄᴋᴛᴛ ᴀʟʟ 」';
    data = threadData.total;
    for (const item of data) {
    const userName = await Users.getNameUser(item.id) || 'Facebook User';
    const itemToPush = item;
    itemToPush.name = userName;
    storage.push(itemToPush);
  };
   storage.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    }
    else if (a.count < b.count) {
      return 1;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
  body = storage.map(item => {
      return `${count++} ︱ ${item.name} với ${item.count} ᴛɪɴ ɴʜᴀ̆́ɴ`;
    }).join('\n');
    const userTotalWeek = threadData.week.find(e => e.id == author) ? threadData.week.find(e => e.id == author).count : 0;
    const userTotalDay = threadData.day.find(e => e.id == author) ? threadData.day.find(e => e.id == author).count : 0;
    const tlttd = (userTotalDay / (storage.reduce((a, b) => a + b.count, 0))) * 100;
    const tlttt = (userTotalWeek / (storage.reduce((a, b) => a + b.count, 0))) * 100
    const tltt = (((storage.filter($ => $.id == author))[0].count) / (storage.reduce((a, b) => a + b.count, 0))) * 100
    footer = `\n[✉️] ᴛᴏ̂̉ɴɢ ᴛɪɴ ɴʜᴀ̆́ɴ: ${storage.reduce((a, b) => a + b.count, 0)}`;
  msg = `${header}\n${body}\n${footer}`;
return api.sendMessage(msg, event.threadID)*/
        }