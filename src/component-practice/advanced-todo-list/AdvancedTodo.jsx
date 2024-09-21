import { createContext, useEffect, useReducer, useState } from "react";
import "./todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilterForm from "./TodoFilterForm";

const LOCAL_STORE_KEY = "TODO";
const initialVal = [];
const ACTION = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
};

export const TodoContext = createContext();

const reducerFn = (todo, { type, payload }) => {
  switch (type) {
    case ACTION.ADD:
      return [
        ...todo,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];

    case ACTION.TOGGLE:
      return todo.map((i) => {
        const { id, completed } = payload;
        if (i.id === id) return { ...i, completed };
        return i;
      });

    case ACTION.DELETE:
      return todo.filter((i) => i.id !== payload.todoId);

    case ACTION.UPDATE:
      return todo.map((item) => {
        const { id, name } = payload;
        if (item.id === id) return { ...item, name };
        return item;
      });

    default:
      return [];
  }
};

export const AdvancedTodo = () => {
  const [filterText, setFilterText] = useState("");
  const [checkComplete, setCheckComplete] = useState(false);
  const [todos, dispatch] = useReducer(reducerFn, initialVal, (initialVal) => {
    const localVal = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
    if (!localVal) {
      return initialVal;
    } else {
      return localVal;
    }
  });

  const filterTodo = todos.filter((item) => {
    const check = checkComplete
      ? item.name.includes(filterText) && !item.completed
      : item.name.includes(filterText);
    if (check) {
      return item;
    }
  });

  useEffect(() => {
    if (todos === undefined) {
      localStorage.removeItem(LOCAL_STORE_KEY);
    } else {
      localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(todos));
    }
  }, [todos]);

  function addNewTodo(name) {
    dispatch({ type: ACTION.ADD, payload: { name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({
      type: ACTION.TOGGLE,
      payload: { id: todoId, completed: completed },
    });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTION.DELETE, payload: { todoId } });
  }

  function updateTodoName(todoId, updatedName) {
    dispatch({
      type: ACTION.UPDATE,
      payload: { id: todoId, name: updatedName },
    });
  }

  return (
    <TodoContext.Provider
      value={{
        toggleTodo,
        deleteTodo,
        addNewTodo,
        todos,
        filterText,
        setFilterText,
        checkComplete,
        setCheckComplete,
        filterTodo,
        updateTodoName,
      }}
    >
      <TodoFilterForm />
      <TodoList />
      <TodoForm />
    </TodoContext.Provider>
  );
};
