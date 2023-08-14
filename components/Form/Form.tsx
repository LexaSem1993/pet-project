import React, { ChangeEvent, FC, useState } from "react";
import { Item } from "../../src/types";
import { v4 } from "uuid";
import "./Form.scss";

interface FormProps {
  onSubmit: (item: Item) => void;
}

export const From: FC<FormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title && title.length === 0) {
      return;
    }
    const item: Item = {
      id: v4(),
      title,
    };
    onSubmit(item);
    setTitle("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__block">
          <label className="form__label">Todo</label>
          <input
            className="form__input"
            id="input"
            type="text"
            placeholder="Enter Word"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </>
  );
};
