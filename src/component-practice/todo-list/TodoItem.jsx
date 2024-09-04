const TodoItem = ({ id, completed, todo, deleteTodo, toggleTodo }) => {
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <span style={completed ? { textDecoration: "line-through" } : {}}>
            {todo}
          </span>
        </label>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </li>
    </>
  );
};

export default TodoItem;
