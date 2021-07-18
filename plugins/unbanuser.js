let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'ᴡʜᴏ ᴡᴀɴᴛs ᴛᴏ ʙᴇ ᴜɴʙᴀɴɴᴇᴅ?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'ᴛᴀɢ ᴏɴᴇ'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `berhasil unbanned`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

module.exports = handler
