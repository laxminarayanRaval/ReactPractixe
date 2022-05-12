import moment from "moment";
import React from "react";

type Props = {
  index: number;
  text: string;
  addTime: string;
  doneTime: string;
  isDone: boolean;
  onToggleTask: any;
  onOperation: any;
};

const ShowTime = ({ tem, title }: any) => {
  // console.log('',tem)
  const hhmm = moment(tem).format("HH:mm");
  const dmy = moment(tem).format("DD-MM-YYYY");
  return (
    <div title={title} className="tem">
      <h2>{hhmm}</h2>
      <h6>{dmy}</h6>
    </div>
  );
};

const TaskItem = (props: Props) => {
  const { index, onToggleTask, onOperation, ...ele } = props;
  return (
    <div key={index} className="todoListItem">
      <h1 title="index">{`#${index}`}</h1>
      <ShowTime title="Added on" tem={ele.addTime} />
      <h1 title="task title">{ele.text}</h1>
      {ele?.doneTime && <ShowTime title="Completed on" tem={ele?.doneTime} />}
      <p>
        {ele.isDone ? (
          <>
            <button
              title="undone task"
              onClick={onToggleTask}
              id={`${index}`}
              className="material-symbols-outlined" > close </button>
            <button
              id={`${index}`}
              onClick={onOperation}
              className="material-symbols-outlined" >  delete_forever </button>
          </>
        ) : (
          <button
            title="done task"
            onClick={onToggleTask}
            id={`${index}`}
            className="material-symbols-outlined" > done </button>
        )}
      </p>
    </div>
  );
};

export default TaskItem;
