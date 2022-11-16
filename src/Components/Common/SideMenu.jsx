
import React from "react";
import { NavLink } from "react-router-dom";

const SideMenu = ({ color }) => {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/" style={{ color: color }}>
              All Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/add_blogs">Create BLog</NavLink>
          </li>
          <li>
            <NavLink to="/favourite_blogs">Favourite List</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
