const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

let todos = [
  { id: 1, text: "Learn React", amount: "123" },
  { id: 2, text: "Build a Todo App", amount: "456" },
];

// Get all Todo items
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a new Todo item
app.post("/todos", (req, res) => {
  const { text, amount } = req.body;
  const newTodo = { id: todos.length + 1, text, amount };
  todos.push(newTodo);
  res.json(newTodo);
});

// Delete a todo list item by ID within a specific todoTitle
app.delete("/todos/:todoId/items/:itemId", (req, res) => {
  const todoId = parseInt(req.params.todoId);
  const itemId = parseInt(req.params.itemId);

  const todo = todos.find((todo) => todo.id === todoId);
  if (!todo) {
    return res.status(404).json({ message: "Todo list not found" });
  }

  todo.todoList = todo.todoList.filter((item) => item.id !== itemId);
  res.json({ message: "Todo item deleted successfully" });
});

// Delete an entire todoTitle item by ID
app.delete("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId);
  const index = todos.findIndex((todo) => todo.id === todoId);
  if (index === -1) {
    return res.status(404).json({ message: "Todo list not found" });
  }

  todos.splice(index, 1);
  res.json({ message: "Todo list deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
