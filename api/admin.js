import { Redis } from "@upstash/redis";
const redis = Redis.fromEnv();

export default async function handler(req, res) {
  try {
    const contacts = await redis.lrange("contacts", 0, -1);
    const list = contacts.map(c => typeof c === 'string' ? JSON.parse(c) : c).reverse();

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Admin - Messages</title>
      <style>
        body{font-family:Arial;background:#0f172a;color:white;padding:20px}
        h1{color:#38bdf8}
        .card{background:#1e293b;padding:15px;margin:12px 0;border-radius:10px;border-left:4px solid #38bdf8}
        .email{color:#94a3b8;font-size:13px}
        .time{color:#64748b;font-size:12px}
        .count{background:#38bdf8;color:#0f172a;padding:5px 12px;border-radius:20px;font-weight:bold}
      </style>
    </head>
    <body>
      <h1>📨 Inbox <span class="count">${list.length} Messages</span></h1>
      <a href="/api/messages" style="color:#38bdf8">View JSON</a> | 
      <a href="/api/messages?clear=true" style="color:#f87171" onclick="return confirm('Delete all?')">Clear All</a>
      ${list.map(c => `
        <div class="card">
          <b>${c.name}</b> <span class="email">${c.email}</span><br>
          <p>${c.message}</p>
          <div class="time">🕒 ${new Date(c.time).toLocaleString()} | IP: ${c.ip}</div>
        </div>
      `).join('') || '<p>No messages yet</p>'}
    </body>
    </html>
    `;
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  } catch(e){
    return res.status(500).send('Error: '+e.message);
  }
}
