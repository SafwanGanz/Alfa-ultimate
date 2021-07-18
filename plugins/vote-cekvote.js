let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*ɴᴏ ᴠᴏᴛɪɴɢ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ!*_\n\n*${usedPrefix}sᴛᴀʀᴛɪᴠᴏᴛᴇ* - ᴛᴏ sᴛᴀʀᴛ ᴠᴏᴛɪɴɢ`
    
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(
`*_「 ᴠᴏᴛᴇ 」_*

*ʀᴇᴀsᴏɴ:* ${reason}

*ᴜᴘᴠᴏᴛᴇ*
_ᴛᴏᴛᴀʟ: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*ᴅᴇᴠᴏᴛᴇ*
_ᴛᴏᴛᴀʟ: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}}

*${usedPrefix}hapusvote* - ᴛᴏ ᴅᴇʟᴇᴛᴇ ᴠᴏᴛᴇs

_by safwan_
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
module.exports = handler
