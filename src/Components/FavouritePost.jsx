import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFavUser } from "../Redux/Initial/Favslice";
import SideMenu from "./Common/SideMenu";
import TimeAgo from "react-timeago";

const FavouritePost = () => {
  const [isReadmore, SetisReadmore] = useState(false);
  const Favs = useSelector((state) => state.Fav.Favs);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFavUser(id));
  };

  const NoBlogs = () => {
    return (
      <>
        <div className="no-blogs">No Favourites added</div>
      </>
    );
  };

  const showContent = () => {
    if (isReadmore) {
      SetisReadmore(false);
    } else {
      SetisReadmore(true);
    }
  };

  return (
    <>
      <div className="menubar">
        <SideMenu></SideMenu>
      </div>

      <div className="Blog-heading">
        <h3>
          <i>Favourite Blogs</i>
        </h3>
      </div>

      {Favs.map((favpost) => {
        return (
          <>
            <div className="blog-data">
              <div className="single-post-wrapper">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" gutterBottom>
                    {favpost.title}
                  </Typography>
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Author- {favpost.firstName} {favpost.lastName}
                </Typography>

                <p>Category--{favpost.category}</p>
                <p>
                  {isReadmore
                    ? favpost.content
                    : `${favpost.content.slice(0, 100)} ...`}
                </p>
                <button onClick={showContent}>
                  {isReadmore ? "...Read less" : "Read More"}
                </button>
                <h2>
                  ----time---- <TimeAgo date={favpost.created_time} />
                </h2>

                <div className="icons-wrapper">
                  <div>
                    <img
                      onClick={() => handleDelete(favpost.id)}
                      src="/bookmarkg.png"
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      {Favs.length === 0 && <NoBlogs />}
    </>
  );
};

export default FavouritePost;
