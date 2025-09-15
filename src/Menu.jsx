import { Link, useLocation } from "react-router-dom";
import "./css/menu.css";
import { useState } from "react";

const Menu = () => {
  const {pathname} = useLocation()

  const menuArray = [
    {
      name: "CSS Global",
      path: "/",
    },
    {
      name: "CSS Modules",
      path: "/css-modules",
    },
    {
      name: "Styled Components",
      path: "/styled-components",
    },
    {
      name: "Tailwind",
      path: "/tailwind",
    },
  ];
  return (
    <menu className="menu">
      {menuArray.map((item, index) => (
        <li key={index} className={`${pathname === item.path ? "active" : ""}`}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </menu>
  );
};

export default Menu;
