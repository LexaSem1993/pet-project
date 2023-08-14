import { From } from "../../components/Form";
import { List } from "../../components/List";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../src/store";
import { Item } from "../../src/types";
import { addTodo, deleteTodo } from "../../src/store/todoSlice";
export const Todo = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: IRootState) => state.todos.todos);

  const handleSubmit = (item: Item) => {
    dispatch(addTodo(item));
  };
  const handleRemoveItem = (id: string) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="ui-container">
      <From onSubmit={handleSubmit} />
      <List items={items} onRemoveItem={handleRemoveItem} />
    </div>
  );
};
