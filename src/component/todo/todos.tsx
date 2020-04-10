import React from "react";
import Task, { TaskData } from "./task";

interface TodosProps {
  tasks: TaskData[];
  handleDelete: (index: number) => () => void;
}

const Todos = (props: TodosProps) => (
  <div>
    {props.tasks.map((task, index) => {
      return (
        <div key={index}>
          <Task task={task} Delete={props.handleDelete(index)} />
        </div>
      );
    })}
  </div>
);

export default Todos;
