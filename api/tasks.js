// Project 7 - Step 3: Tasks API (CRUD)
// Role: Backend Developer - Chetanay

let tasks = [
  { id: 1, title: 'Learn Backend', done: false },
  { id: 2, title: 'Build Project 7', done: false },
];

export default function handler(req, res) {
  // GET /api/tasks - Show all tasks
  if (req.method === 'GET') {
    return res.status(200).json({ tasks });
  }

  // POST /api/tasks - Add new task
  if (req.method === 'POST') {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Title required' });
    }

    const newTask = { id: Date.now(), title, done: false };
    tasks.push(newTask);
    return res.status(201).json({ message: 'Task created', task: newTask });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
