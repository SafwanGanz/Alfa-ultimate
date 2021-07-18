let limit = 30
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'ʜʜʜ ..ᴡʜᴇʀᴇ ɪs ʟɪɴᴋ?'
  let chat = global.DATABASE._data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*ᴛɪᴛʟᴇ:* ${title}
*ғɪʟᴇ sɪᴢᴇ:* ${filesizeF}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
   conn.sendFile(m.chat, dl_link, title + '.mp4', `
*ᴛɪᴛʟᴇ:* ${title}
*ғɪʟᴇ sɪᴢᴇ:* ${filesizeF}
`.trim(), m, false, {
  ..._thumb,
  asDocument: chat.useDocument
})
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

