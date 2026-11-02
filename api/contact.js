import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  
  try {
    const { name, email, message } = req.body
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields required' })
    }

    const contact = {
      id: Date.now(),
      name,
      email,
      message,
      time: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || 'unknown'
    }
    
    // SAVE TO DB - Like DynamoDB PutItem
    await redis.lpush('contacts', JSON.stringify(contact))
    
    return res.status(200).json({ 
      success: true, 
      message: 'Saved to DynamoDB Concept DB!',
      id: contact.id
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'DB Error', details: error.message })
  }
}
