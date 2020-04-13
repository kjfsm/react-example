import React from "react";
import Task, { TaskData } from "./task";

interface TodosProps {
  tasks: TaskData[];
  handleDelete: (index: number) => () => void;
  handleUpdate: any;
}

const Todos = (props: TodosProps) => (
  <div>
    {props.tasks.map((task, index) => {
      return (
        <div key={index}>
          <Task
            task={task}
            Delete={props.handleDelete(index)}
            Update={props.handleUpdate(index)}
          />
        </div>
      );
    })}
  </div>
);

export default Todos;
