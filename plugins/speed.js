let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  await m.reply('_⏱️ ᴛᴇsᴛɪɴɢ sᴘᴇᴇᴅ..._')
  let neww = performance.now()
  let speed = neww - old
  let txt = `
ʀᴇsᴘᴏɴᴅ ɪɴ ${speed} ᴍɪʟʟɪ sᴇᴄᴏɴᴅs

🖥️ *_sᴛᴀᴛᴜs_* 🖥️ :
- ɢʀᴏᴜᴘs ᴄʜᴀᴛs *${groups.length}* 
- ɢʀᴏᴜᴘs ᴊᴏɪɴᴇᴅ *${groupsIn.length}* 
- ɢʀᴏᴜᴘs ʟᴇғᴛ *${groups.length - groupsIn.length}* 
- ᴘᴇʀsᴏɴᴀʟ ᴄʜᴀᴛs *${chats.length - groups.length}* 
- ᴛᴏᴛᴀʟ ᴄʜᴀᴛs *${chats.length}* 

🖥️ *_sʏsᴛᴇᴍ ɪɴғᴏ_* 🖥️:
${'```' + `
🔋 ʙᴀᴛᴛᴇʀʏ : ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Charging...' : '⚡ Discharging'}` : 'Unknown'}
${util.format(conn.user.phone)}
`.trim() + '```'}

📡 *_sᴇʀᴠᴇʀ ɪɴғᴏ_* 📡:
ʀᴀᴍ: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}

📟 *_ɴᴏᴅᴇᴊs ᴍᴇᴍᴍᴏʀʏ ᴜsᴀɢᴇ_* 📟:
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `📉 *_ᴛᴏᴛᴀʟ ᴄᴘᴜ ᴜsᴀɢᴇ_* 📉:
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
  m.reply(txt)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed|info)$/i
module.exports = handler
