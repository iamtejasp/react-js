import { useContext, useRef, useState } from "react";
import { TodoContext } from "./AdvancedTodo";

export function TodoItem({ id, name, completed }) {
  const { toggleTodo, deleteTodo, updateTodoName } = useContext(TodoContext);
  const [isEdit, setIsEdit] = useState(false);
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (nameRef.current.value === "") return;

    updateTodoName(id, nameRef.current.value);
    setIsEdit(false);
  }

  return (
    <li className="list-item">
      {isEdit ? (
        <form onSubmit={handleSubmit}>
          <input autoFocus type="text" defaultValue={name} ref={nameRef} />
          <button data-button-edit>Save</button>
        </form>
      ) : (
        <>
          <label className="list-item-label">
            <input
              checked={completed}
              type="checkbox"
              data-list-item-checkbox
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button data-button-edit onClick={() => setIsEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteTodo(id)} data-button-delete>
            Delete
          </button>
        </>
      )}
    </li>
  );
}
