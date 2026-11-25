let groups = [];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET all groups
  if (req.method === 'GET') {
    return res.status(200).json(groups);
  }

  // POST - Create Group / Add Expense / Settle
  if (req.method === 'POST') {
    const { action, groupId, name, members, description, amount, paidBy } = req.body;

    if (action === 'createGroup') {
      const newGroup = {
        id: Date.now().toString(),
        name,
        members: members.map(m => ({ name: m, balance: 0 })),
        expenses: []
      };
      groups.push(newGroup);
      return res.status(200).json(newGroup);
    }

    if (action === 'addExpense') {
      const group = groups.find(g => g.id === groupId);
      if (!group) return res.status(404).json({ error: 'Group not found' });

      const share = amount / group.members.length;
      group.members.forEach(m => {
        if (m.name === paidBy) {
          m.balance += (amount - share);
        } else {
          m.balance -= share;
        }
      });

      group.expenses.push({ description, amount, paidBy, date: new Date().toLocaleDateString('en-IN') });
      return res.status(200).json(group);
    }

    if (action === 'settle') {
      const group = groups.find(g => g.id === groupId);
      if (!group) return res.status(404).json({ error: 'Group not found' });
      group.members.forEach(m => m.balance = 0);
      group.expenses.push({ description: 'All Settled Up ✅', amount: 0, paidBy: 'System', date: new Date().toLocaleDateString('en-IN') });
      return res.status(200).json(group);
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
