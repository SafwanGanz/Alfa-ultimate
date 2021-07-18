let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'ᴡʜᴇʀᴇ ɪs ᴛʜᴇ ᴜʀʟ ʙʀᴏ?'
  global.API('xteam', '/dl/twitter', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^\x00$/i
handler.disabled = true

module.exports = handler
