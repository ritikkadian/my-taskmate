import "./styles.css";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(item) {
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title: item,
          completed: false,
        },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}
