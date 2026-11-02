import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function handler(req, res) {
  try {
    const contacts = await redis.lrange('contacts', 0, 20)
    const parsed = contacts.map(c => JSON.parse(c))
    return res.status(200).json({ 
      count: parsed.length, 
      contacts: parsed,
      db: 'Upstash Redis - DynamoDB Concept'
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
