import React, { FC } from "react";
import { Item } from "../../src/types";
import "./List.scss";
interface ListProps {
  items: Item[];
  onRemoveItem: (id: string) => void;
}

export const List: FC<ListProps> = ({ items, onRemoveItem }) => {
  return (
    <>
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="list">
            <div key={item.id}>
              <input className="input" id={item.id} type="checkbox" />
              <label className="label" htmlFor={item.id}>
                {item.title}
              </label>
            </div>
            <span className="remove" onClick={() => onRemoveItem(item.id)}>
              Remove
            </span>
          </div>
        ))
      ) : (
        <div className="list">Item Not Found</div>
      )}
    </>
  );
};
