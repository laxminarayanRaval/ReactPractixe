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

  const addTask = () => {
    console.log(todoItem);
    dispatch(todoTaskActions.add(todoItem));
    setTodoItem("");
  };

  return (
    <div className="todoMaker">
      <input
        name="todoText"
        style={{ fontSize: "x-large" }}
        placeholder="Todo Task"
        value={todoItem}
        onChange={(e) => updateTodo(e.target.value)}
      />
      <span onClick={addTask} className="material-symbols-outlined">
        add
      </span>
    </div>
  );
};

export default TodoMaker;
