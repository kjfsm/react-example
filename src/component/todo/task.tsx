import React, { useState } from "react";

interface TaskProps {
  task: TaskData;
  Delete: () => void;
  Update: any;
}

export interface TaskData {
  title: string;
  description: string;
}

const Task = (props: TaskProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);
  const [prevTitle, setPrevTitle] = useState(props.task.title);
  const [prevDescription, setPrevDescription] = useState(
    props.task.description,
  );

  if (isUpdate) {
    return (
      <div>
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            props.Update(title, description);
            setIsUpdate(false);
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            setTitle(prevTitle);
            setDescription(prevDescription);
            setIsUpdate(!isUpdate);
          }}
        >
          Cancel
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div>{props.task.title}</div>
        <div>{props.task.description}</div>
        <button onClick={() => props.Delete()}>Delete</button>
        <button
          onClick={() => {
            setPrevTitle(title);
            setPrevDescription(description);
            setIsUpdate(true);
          }}
        >
          Update
        </button>
      </div>
    );
  }
};

export default Task;
