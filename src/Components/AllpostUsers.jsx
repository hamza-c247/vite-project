import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
  UserFavourite,
} from "../Redux/Initial/Userslice";

import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "react-timeago";
import {
  addFavUser,
  deleteFavUser,
  getFavUser,
} from "../Redux/Initial/Favslice";
import { useState } from "react";

const AllpostUsers = ({ user }) => {
  const [image, Setimage] = useState("false");
  console.log(image);
  const {
    id,
    firstName,
    lastName,
    title,
    phone,
    address,
    category,
    time,
    content,
  } = user;
  const Favs = useSelector((state) => state.Fav.Favs);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(id));
  };

  const addtofavourite = (id) => {
    if (image === "false") {
      Setimage("true");
    } else {
      Setimage("false");
    }
    dispatch(addFavUser(id));
    console.log(id);
    console.log(Favs);
  };

  return (
    <>
      <div className="single-post-wrapper">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>

          <Link to={`/students/${id}`}>
            <img src="/setting.png"></img>
          </Link>
        </Box>

        <Typography variant="subtitle2" gutterBottom>
          Author- {firstName} {lastName}
        </Typography>
        {/* <IconButton component={Link} to={`/students/${id}`}>
            <VisibilityIcon />
          </IconButton> */}

        {/* <Typography variant="caption">{phone}</Typography>
        
        <Typography variant="caption">{address}</Typography> */}
        <p>Category--{category}</p>
        <p>Content--{content}</p>
        <h2>{time}</h2>

        <div className="icons-wrapper">
          <div>
            <img
              onClick={() => addtofavourite(id)}
              src={image === "false" ? "/bookmarkgrey.png" : "/bookmarkg.png"}
            />
          </div>
          <div>
            <div>
              <Link to={`/Users/${id}/edit`}>
                <img src="/edit.png"></img>
              </Link>
            </div>
            <div>
              <Link onClick={handleDelete}>
                <img src="/delete.png"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-break"></div>
    </>
  );
};

export default AllpostUsers;
