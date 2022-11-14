import { Typography } from "@mui/material";
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
            <NavLink to="/AddPosts">Create BLog</NavLink>
          </li>
          <li>
            <NavLink to="/FavouritePosts">Favourite List</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
