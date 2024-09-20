import { useEffect, useReducer, useState } from "react";
import "./todo.css";
import { TodoItem } from "./TodoItem";

const LOCAL_STORE_KEY = "TODO";
const initialVal = [];

const ACTION = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
};

const reducerFn = (todo, { type, payload }) => {
  switch (type) {
    case ACTION.ADD:
      return [
        ...todo,
        { name: payload, completed: false, id: crypto.randomUUID() },
      ];

    case ACTION.TOGGLE:
      return todo.map((i) => {
        const completed = payload.completed;
        if (i.id === payload.todoId) return { ...i, completed };

        return i;
      });

    case ACTION.DELETE:
      return todo.filter((i) => i.id !== payload.todoId);

    default:
      return [];
  }
};

export const AdvancedTodo = () => {
  const [newTodoName, setNewTodoName] = useState("");

  const [todos, dispatch] = useReducer(reducerFn, initialVal, (initialVal) => {
    const localVal = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
    if (!localVal) {
      return initialVal;
    } else {
      return localVal;
    }
  });

  useEffect(() => {
    if (todos === undefined) {
      localStorage.removeItem(LOCAL_STORE_KEY);
    } else {
      localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(todos));
    }
  }, [todos]);

  function addNewTodo() {
    if (newTodoName === "") {
      alert("Please Enter Value");
      return;
    }

    dispatch({ type: ACTION.ADD, payload: newTodoName });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTION.TOGGLE, payload: { todoId, completed } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTION.DELETE, payload: { todoId } });
  }

  return (
    <>
      <div className="filter-form">
        <div className="filter-form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value="" />
        </div>
        <label>
          <input type="checkbox" />
          Hide Completed
        </label>
      </div>
      <ul id="list">
        {todos.map((todo) => {
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

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  );
};
