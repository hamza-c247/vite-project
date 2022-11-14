import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFavUser } from "../Redux/Initial/Favslice";
import SideMenu from "./Common/SideMenu";

const FavouritePost = () => {
  const Favs = useSelector((state) => state.Fav.Favs);
  console.log("-----------> favs", Favs);
  
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
                  {/* 
          <Link to={`/students/${id}`}>
            <img src="/setting.png"></img>
          </Link> */}
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Author- {favpost.firstName} {favpost.lastName}
                </Typography>

                <p>Category--{favpost.category}</p>
                <p>Content--{favpost.content}</p>
                <h2>----time----{favpost.time}</h2>

                <div className="icons-wrapper">
                  <div>
            <img
              onClick={() => handleDelete(favpost.id)}
              src="/bookmarkg.png" 
            />
          </div>
                  <div>
                    {/* <div>
              <Link to={`/Users/${id}/edit`}>
                <img src="/edit.png"></img>
              </Link>
            </div> */}
                    {/* <div>
              <Link onClick={handleDelete}>
                <img src="/delete.png"></img>
              </Link>
            </div> */}
                  </div>
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
