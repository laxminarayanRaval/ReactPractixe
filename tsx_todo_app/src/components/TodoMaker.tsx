import React from "react";
import { useDispatch } from "react-redux";
import { todoTaskActions } from "../store/todoTask";

type Props = {};

const TodoMaker = (props: Props) => {
  const [todoItem, setTodoItem] = React.useState("");

  const dispatch = useDispatch();

  const updateTodo = (txt: string) => {
    setTodoItem(txt);
  };

  const addTask = (e:any) => {
    e.preventDefault();
    // console.log(todoItem);
    dispatch(todoTaskActions.add(todoItem));
    setTodoItem("");
  };

  return (
    <form onSubmit={addTask} className="todoMaker">
      <input
      autoComplete="off"
        name="todoText"
        style={{ fontSize: "x-large" }}
        placeholder="Todo Task"
        value={todoItem}
        onChange={(e) => updateTodo(e.target.value)}
      />
      <button type="submit" title="add task" className="material-symbols-outlined">
        add
      </button>
    </form>
  );
};

export default TodoMaker;
