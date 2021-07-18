let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'ᴡʜᴏ ᴡᴀɴᴛs ᴛᴏ ʙᴇ ʙᴀɴɴᴇᴅ?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'ᴛᴀɢ ᴏɴᴇ'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `sᴜᴄᴄᴇsɢᴜʟʟʏ ʙᴀɴɴᴇᴅ`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
