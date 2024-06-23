import React from 'react';
import "./Todoitem.css"

function TodoItem({ todo, completeTodo, deleteTodo }) {
  const handleComplete = () => {
    completeTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleComplete}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
