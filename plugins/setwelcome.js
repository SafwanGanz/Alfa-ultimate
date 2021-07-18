let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.DATABASE._data.chats[m.chat].sWelcome = text
    m.reply('ᴡᴇʟᴄᴏᴍᴇ sᴇᴛ sᴜᴄᴄᴇssғᴜʟʟʏ\n@ᴜsᴇʀ (Mention)\n@sᴜʙᴊᴇᴄᴛ (Group Title)\n@ᴅᴇsᴄʀɪᴘᴛɪᴏɴ (Group Description)')
  } else throw 'ᴡʜᴇʀᴇ ɪs ᴛʜᴇ ᴛᴇxᴛ?'
}
handler.help = ['setwelcome <text>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

