const { toAudio } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴠɪᴅᴇᴏ ᴏʀ ᴠᴏɪᴄᴇ ɴᴏᴛᴇ ᴛʜᴀᴛ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴍᴘ3 ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toAudio(media, 'mp4')
  conn.sendMessage(m.chat, audio, MessageType.audio, {
    quoted: m, mimetype: 'audio/mp4'
  })
}
handler.help = ['tomp3']
handler.tags = ['audio']

handler.command = /^to(mp3|a(udio)?)$/i

module.exports = handler
