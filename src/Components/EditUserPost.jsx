import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Paper,
  Button,
  InputLabel,
  Select,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, clearUser, updateUser } from "../Redux/Initial/Userslice";
import { Box } from "@mui/system";
import { FormControl, MenuItem } from "@mui/material";
import SideMenu from "./Common/SideMenu";

const EditUserPost = () => {
  const [age, setAge] = useState("");

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phone: "",
      category: age,
      content: "",
    },
  });

  const params = useParams();
  let history = useNavigate();
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.User.User);
  useEffect(() => {
    dispatch(getUser(params.id));
    return () => {
      dispatch(clearUser());
    };
  }, []);

  useEffect(() => {
    reset(Users);
  }, [Users]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const onSubmit = (data) => {
    dispatch(updateUser(data));
    history("/");
  };
  return (
    <>
      <div className="sidebar-wrapper">
        <div className="menubar">
          <SideMenu></SideMenu>
        </div>

        <div className="post-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <TextField
                  id="title"
                  label="Title"
                  variant="outlined"
                  placeholder="Enter Your Title"
                  color="secondary"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <TextField
                  id="first-name"
                  label="First Name"
                  variant="outlined"
                  placeholder="Enter Your First Name"
                  color="secondary"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />

            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <TextField
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter Your Last Name"
                  color="secondary"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />


         
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel color="secondary" id="demo-simple-select-label">
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      color="secondary"
                      id="category"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                      {...field}
                    >
                      <MenuItem value={"ten"}>Ten</MenuItem>
                      <MenuItem value={"twenty"}>Twenty</MenuItem>
                      <MenuItem value={"thirty"}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Content"
                  multiline
                  rows={4}
                  color="secondary"
                  {...field}
                />
              )}
            />
            <Button type="submit">Update User</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserPost;
