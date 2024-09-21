import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "./AdvancedTodo";

const TodoList = () => {
  const { filterTodo } = useContext(TodoContext);

  return (
    <ul id="list">
      {filterTodo.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
};

export default TodoList;
