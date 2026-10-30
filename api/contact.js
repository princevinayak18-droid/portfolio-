// api/contact.js - Vercel Serverless Function (AWS Lambda Concept)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation - same as Lambda validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields required' });
  }

  // For now, log it (later we connect to Sheet/DB)
  // This is like CloudWatch Logs for Lambda
  console.log('New Contact:', { name, email, message, time: new Date().toISOString() });

  // Simulate saving to DynamoDB
  // In real AWS: await dynamodb.put({ TableName: 'contacts', Item: {...} })

  return res.status(200).json({ 
    success: true, 
    message: 'Message received! I will reply within 24h.' 
  });
}
