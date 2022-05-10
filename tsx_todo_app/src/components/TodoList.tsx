import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { todoTaskActions } from "../store/todoTask";

type Props = {};

const ShowTime = ({tem, title}:any) => {
  console.log('',tem)
  const hhmm = moment(tem).format("HH:mm");
  const dmy = moment(tem).format("DD-MM-YYYY");
  return (
    <div title={title} className="tem">
      <h2>{hhmm}</h2>
      <h6>{dmy}</h6>
    </div>
  );
};

const TodoList = (props: Props) => {
  const dispatch = useDispatch();

  const todoTasksList = useSelector((state: any) => state.todoTask);

  console.log("List:", todoTasksList);

  const markAsDone = (e: any) => {
    console.log("Mark as done:", e.target.id);
    dispatch(todoTaskActions.done(e.target.id));
  };
  return (
    <div>
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
            {todoTasksList.map((ele: any) => (
              <div key={ele.id} className="todoListItem">
                <h1>{ele.id}</h1>
                <ShowTime title="Added on" tem={ele.addTime} />
                <h1>{ele.text}</h1>
                { ele?.doneTime && <ShowTime title="Completed on" tem={ele?.doneTime} /> }
                <p>
                {ele.isDone ? 
                  <span className="material-symbols-outlined"> close </span> :
                  <span onClick={markAsDone} id={ele.id} title="Mark as Done" className="material-symbols-outlined" > done </span>
                }
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
