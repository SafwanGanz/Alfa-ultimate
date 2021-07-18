let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.reply(m.chat, 'ᴛʜᴇʀᴇ ᴀʀᴇ sᴛɪʟʟ ᴜɴᴀɴsᴡᴇʀᴇᴅ ǫᴜᴇsᴛɪᴏɴs ɪɴ ᴛʜɪs ᴄʜᴀᴛ', conn.tebaklagu[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '3AaKHE9ZMMEdyRadsg8rcy' }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let result = await res.json()
    let json = result.result
    // if (!json.status) throw json
    let caption = `
ɢᴜᴇss ᴛʜᴇ sᴏɴɢ ᴛɪᴛʟᴇ
ᴛɪᴍᴇᴏᴜᴛ *${(timeout / 1000).toFixed(2)} sᴇᴄᴏɴᴅs*
ᴛʏᴘᴇ *${usedPrefix}ᴄʜᴇᴄᴋ* ғᴏʀ ʜᴇʟᴘ
ʙᴏɴᴜs : ${points} xᴘ
*ʀᴇᴘʟʏ ᴛᴏ ᴛʜɪs ᴍᴇssᴀɢᴇ ᴛᴏ ᴀɴsᴡᴇʀ*`.trim()
    conn.tebaklagu[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[id]) conn.reply(m.chat, `ᴛɪᴍᴇ ɪs ᴜᴘ!\nᴛʜᴇ ᴀɴsᴡᴇʀ ɪs *${json.judul}*`, conn.tebaklagu[id][0])
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i
handler.limit = true
module.exports = handler