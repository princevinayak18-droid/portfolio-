import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export default async function handler(req, res) {
  try {
    // If ?clear=true in URL, delete all bad data
    if (req.query.clear === 'true') {
      await redis.del('contacts');
      return res.json({ count: 0, contacts: [], db: "Cleared!" });
    }

    let contacts = await redis.lrange('contacts', 0, -1);

    // Fix for [object Object] error - safe parsing
    contacts = contacts.map(c => {
      try {
        if (typeof c === 'string') {
          // Skip bad "[object Object]" strings
          if (c === '[object Object]' || c.includes('[object Object]')) return null;
          return JSON.parse(c);
        }
        return c;
      } catch (e) {
        return null;
      }
    }).filter(Boolean);

    return res.status(200).json({ 
      count: contacts.length, 
      contacts: contacts,
      db: "Upstash Redis - DynamoDB Concept" 
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
