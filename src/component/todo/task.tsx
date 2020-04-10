import React from "react";

interface TaskProps {
  task: TaskData;
  Delete: () => void;
}

export interface TaskData {
  title: string;
  description: string;
}

const Task = (props: TaskProps) => {
  return (
    <div>
      <div>{props.task.title}</div>
      <div>{props.task.description}</div>
      <button onClick={() => props.Delete()}>Delete</button>
    </div>
  );
};

export default Task;
