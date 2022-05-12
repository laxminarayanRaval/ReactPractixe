import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoTaskActions } from "../store/todoTask";
import { removedTaskActions } from "../store/removedTasks";
import TaskItem from "./TaskItem";

type Props = {};

const TodoList = (props: Props) => {
  const dispatch = useDispatch();

  const todoTasksList = useSelector((state: any) => state.todoTask);
  console.log("todo:", todoTasksList);

  // console.log("List:", todoTasksList);

  const toggleTask = (e: any) => {
    // console.log("Mark as done:", e.target.id);
    dispatch(todoTaskActions.done(e.target.id));
  };

  const removeTask = (e: any) => {
    const ele_id = e.target.id;
    console.log("Remove Task:", ele_id, "todoTasksList:", todoTasksList);
    dispatch(removedTaskActions.add(todoTasksList[ele_id]));
    dispatch(todoTaskActions.remove(ele_id));
    // dispatch(todoTaskActions.removeTask(ele_id));
  };
  return (
    <>
      <h3>Todo List</h3>
      {!todoTasksList.length && <p>No Tasks, Please Add some!</p>}
      {todoTasksList.length > 0 && (
        <>
          <p>Hello Mr. Lx Complete your task.</p>
          <div className="todoList">
            {/* <div key="0" className="todoListItem">
            <b>#</b>
            <b>Task</b>
            <b>Mark</b>
          </div> */}
            {todoTasksList.map((ele: any, index: number) => (
              <TaskItem
                isDone={ele.isDone}
                key={index}
                index={index}
                text={ele.text}
                addTime={ele.addTime}
                doneTime={ele.doneTime}
                onToggleTask={toggleTask}
                onOperation={removeTask}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default TodoList;
