import React, { useState } from "react";

interface NewTaskProps {
  create: (title: string, description: string) => void;
}

const NewTask = (props: NewTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <fieldset>
      <div>
        title <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <button
          onClick={() => {
            props.create(title, description);
            setTitle("");
            setDescription("");
          }}
        >
          send
        </button>
      </div>
    </fieldset>
  );
};

export default NewTask;
