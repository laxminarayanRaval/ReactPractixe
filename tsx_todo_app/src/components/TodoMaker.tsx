import React from "react";

type Props = {};

const TodoMaker = (props: Props) => {
  const initialState = {
    text: "",
    isDone: false,
  };
  const [todoItem, setTodoItem] = React.useState(initialState);

  const updateTodo = (txt: string) => {
    setTodoItem({ ...todoItem, text: txt });
  };

  const addTask = () => {
    console.log(todoItem.text, todoItem.isDone);
    setTodoItem(initialState);
  };

  return (
    <div className="todoMaker">
      <input
        name="todoText"
        style={{ fontSize: "x-large" }}
        placeholder="Todo Task"
        value={todoItem.text}
        onChange={(e) => updateTodo(e.target.value)}
      />
      <span onClick={addTask} className="material-symbols-outlined">
        add
      </span>
    </div>
  );
};

export default TodoMaker;
