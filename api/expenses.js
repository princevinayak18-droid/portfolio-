// Project 8: Expense Tracker API
let expenses = [
  { id: 1, title: "Lunch", amount: 150, category: "Food" },
  { id: 2, title: "Metro", amount: 50, category: "Travel" }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET - Get all expenses + total
  if (req.method === 'GET') {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    return res.status(200).json({ success: true, total, count: expenses.length, expenses });
  }

  // POST - Add new expense
  if (req.method === 'POST') {
    const { title, amount, category } = req.body;
    if (!title || !amount) {
      return res.status(400).json({ success: false, message: "Title and Amount required" });
    }
    const newExpense = { id: Date.now(), title, amount: Number(amount), category: category || "General" };
    expenses.push(newExpense);
    return res.status(201).json({ success: true, message: "Expense Added!", expense: newExpense });
  }

  // DELETE - Delete expense by id ?id=123
  if (req.method === 'DELETE') {
    const id = Number(req.query.id);
    expenses = expenses.filter(e => e.id !== id);
    return res.status(200).json({ success: true, message: "Expense Deleted!" });
  }

  return res.status(405).json({ success: false, message: "Method not allowed" });
}
