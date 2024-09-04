import { useState } from "react";
import TodoItem from "./TodoItem";

const SimpleTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodoList = () => {
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
      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={addTodoList}>Add todo</button>
      </div>
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

export default SimpleTodoList;
