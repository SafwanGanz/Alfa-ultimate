let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Enter the amount of Limit to be given'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
   if (!who) throw 'Tag one'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'only numbers'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'Minimal 1'
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) throw 'Insufficient experience to transfer'
  users[m.sender].exp -= exp
  users[who].exp += xp

    m.reply(`(${-poin} Limit) + (${-pjk} Limit (Pajak 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} Limit`, who, m.text)
}
handler.help = ['paylimit @user <amount>']
handler.tags = ['xp']
handler.command = /^paylimit$/
handler.rowner = false

module.exports = handler

