import { useContext } from "react";
import { TodoContext } from "./AdvancedTodo";

const TodoFilterForm = () => {
  const { filterText, setFilterText, checkComplete, setCheckComplete } =
    useContext(TodoContext);

  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={checkComplete}
          onChange={(e) => setCheckComplete(e.target.checked)}
        />
        Hide Completed
      </label>
    </div>
  );
};

export default TodoFilterForm;
