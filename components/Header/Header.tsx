import React from "react";
import "./Header.scss";

import { NavLink } from "react-router-dom";

export const Header = () => {
  const menuLinks = [
    { title: "Home", alias: "/" },
    { title: "Posts", alias: "/posts" },
    { title: "Users", alias: "/users" },
  ];

  //item
  const menuItem = menuLinks.map((item) => (
    <li className="header__item" key={item.alias}>
      <NavLink className="nav" to={item.alias}>
        {item.title}
      </NavLink>
    </li>
  ));
  //list
  const menuList = <ul className="headerList">{menuItem}</ul>;
  return (
    <div className="header">
      <div className="header__logo">Logo</div>
      {menuList}
    </div>
  );
};
