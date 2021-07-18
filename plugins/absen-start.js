let handler = async(m, { usedPrefix, text }) => {
     conn.absent = conn.absent ? conn.absent : {}
     let id = m.chat
     if (id in conn.absen) {
         throw `_*There are still absences in this chat!*_\n\n*${usedPrefix}remove absent* - to delete absences`
     }
     conn.absent[id] = [
         m.reply(`Successfully starting timesheet!\n\n*${usedPrefix}absent* - for absent\n*${usedPrefix}checkable* - to check attendance\n*${usedPrefix}remove absent* - to delete attendance data `),
         [],
         text
     ]
}
handler.help = ['startabsen [text]']
handler.tags = ['absent']
handler.command = /^(start|start)absent$/i
handler.group = true
handler.admin = true
module.exports = handler