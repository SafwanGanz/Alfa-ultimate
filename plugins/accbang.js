let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'nope'
   if (isAdmin) throw `Even though you're already an admin`
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler