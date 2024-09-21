import { useContext, useRef } from "react";
import { TodoContext } from "./AdvancedTodo";

const TodoForm = () => {
  const { addNewTodo } = useContext(TodoContext);
  const newTodoName = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodoName.current.value === "") {
      alert("Please Enter Value");
      return;
    }

    addNewTodo(newTodoName.current.value);

    newTodoName.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" ref={newTodoName} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
