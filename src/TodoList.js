import { TodoItem } from "./TodoItem";

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <h1>Nothing to show here</h1>}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
