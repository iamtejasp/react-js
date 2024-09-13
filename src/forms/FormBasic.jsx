import { useState } from "react";
import TodoItem from "../component-practice/todo-list/TodoItem";

const FormBasic = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodoList = (e) => {
    e.preventDefault();

    if (todoText === "") return;

    setTodoList((currentValue) => {
      return [
        ...currentValue,
        { todo: todoText, id: crypto.randomUUID(), completed: false },
      ];
    });

    setTodoText("");
  };

  const toggleTodo = (todoId, completed) => {
    setTodoList((currentValue) => {
      return currentValue.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };

        return todo;
      });
    });
  };

  const deleteTodo = (todoId) => {
    setTodoList((currentValue) => {
      return currentValue.filter((todo) => {
        if (todo.id !== todoId) return todo;
      });
    });
  };

  return (
    <>
      <form onSubmit={addTodoList}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
      <br />

      <h1>Todo list</h1>
      <ul>
        {todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FormBasic;
