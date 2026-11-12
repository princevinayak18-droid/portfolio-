// Project 7 - Step 2: Login API
// Role: Backend Developer - Chetanay

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  // Demo check - Day 3 we will check from real DB
  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  return res.status(200).json({
    message: 'Login successful',
    token: 'demo-token-12345',
    user: { email },
  });
}
