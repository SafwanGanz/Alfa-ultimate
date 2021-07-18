let handler = async(m, { conn, text, isROwner, isOwner }) => {
   if (text) {
     if (isROwner) global.conn.bye = text
     else if (isOwner) conn.bye = text
     global.DATABASE._data.chats[m.chat].sBye = text
     m.reply('Bye set successfully\n@user (Mention)')
   } else throw 'Wheres the text?'
}
handler.help = ['setbye <text>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler
