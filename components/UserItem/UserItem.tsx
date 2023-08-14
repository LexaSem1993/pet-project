import React, { FC } from "react";
import { User } from "../../src/types";

import "./userItem.scss";
import { useDeleteUserMutation } from "../../src/store/usersApi";

export const UserItem: FC<{ user: User }> = ({ user }) => {
  const [deleteUser] = useDeleteUserMutation();
  const handlerDeletePost = () => {
    deleteUser({ id: user.id });
  };
  return (
    <div className="user">
      <h1 className="user__title">{user.name}</h1>
      <div className="user__info">
        <span className="user__phone-title">Телефон:</span>
        <p className="user__phone">{user.phone}</p>
      </div>
      <div className="user__info">
        <span className="user__site-title">Сайт:</span>
        <p className="user__site">{user.website}</p>
      </div>
      <div className="user__info">
        <span className="user__city-title">Город:</span>
        <p className="user__city">{user.address.city}</p>
      </div>
      <button onClick={handlerDeletePost} className="user__button">
        Delete
      </button>
    </div>
  );
};
