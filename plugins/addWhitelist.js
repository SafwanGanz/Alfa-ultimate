let handler = async (m, { usedPrefix, command, text, args }) => {
    if (!args || !['add', 'remove'].includes(args[0].toLowerCase())) throw `
*ᴜsᴀɢᴇ:* ${usedPrefix + command} <add|remove> number,number,...,number
*ᴇxᴀᴍᴘʟᴇ:*
${usedPrefix + command} add 919567997462
${usedPrefix + command} remove 919567997462
`.trim()
    let type = args[0].toLowerCase() === 'add' ? true : false
    let teks = text.replace(args[0], '').trim()
    let users = teks.split(',').map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    for (let who of users) {
        let user = global.DATABASE.data.users[who]
        if (!user) user = global.DATABASE.data.users[who] = {}
        user.whitelist = type
    }
    m.reply(`Done ${type ? 'add' : 'remove'} whitelist ${users.length} user(s)`)
}
handler.help = ['whitelist'].map(v => v + ' number,number')
handler.tags = ['owner']
handler.command = ['whitelist']
handler.register = true
handler.owner = true

module.exports = handler
