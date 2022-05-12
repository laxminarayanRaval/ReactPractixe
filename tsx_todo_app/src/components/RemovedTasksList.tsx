import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

type Props = {};

const RemovedTasksList = (props: Props) => {
  const removedTasks = useSelector((state: any) => state.removedTask);
  console.log("remove :",removedTasks)
  if (!removedTasks.length) return <p>No Tasks Removed Yet!</p>;

  return (
    <>
      <h3>Removed Tasks List</h3>
      <div className="todoList">
        {removedTasks.map((ele: any, index: number) => {
          <TaskItem
            isDone={ele.isDone}
            key={index}
            index={index}
            text={ele.text}
            addTime={ele.addTime}
            doneTime={ele.doneTime}
            onToggleTask={() => {}}
            onOperation={() => {}}
          />;
        })}
      </div>
    </>
  );
};

export default RemovedTasksList;
