import React, { useState } from "react";
import NewTask from "./newTask";
import Todos from "./todos";
import { TaskData } from "./task";

const Todo = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const handleCreate = (title: string, description: string) => {
    const newTasks = tasks.slice();
    setTasks(newTasks.concat({ title: title, description: description }));
  };

  const handleDelete = (index: number) => () => {
    const newTasks = tasks.slice();
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleUpdate = (index: number) => (
    title: string,
    description: string,
  ) => {
    const newTasks = tasks.slice();
    newTasks[index] = { title, description };
    setTasks(newTasks);
  };

  return (
    <>
      <div>
        <NewTask create={handleCreate} />
      </div>
      <div>
        <Todos
          tasks={tasks}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    </>
  );
};

export default Todo;
