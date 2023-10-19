import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Initial/Userslice";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SideMenu from "./Common/SideMenu";

const AddPosts = () => {
  const [age, setAge] = useState("");
  const [empty, setEmpty] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      title: "",
      category: age,
      content: "",
      created_time: new Date(),
    },
  });
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onSubmit = (data) => {
    if (
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.title !== "" &&
      data.category !== "" &&
      data.content !== ""
    ) {
      dispatch(addUser(data));
      setEmpty(false);
    } else if (
      data.firstName === "" &&
      data.lastName === "" &&
      data.title === "" &&
      data.category === "" &&
      data.content === ""
    ) {
      setEmpty(true);
    }

    reset({
      firstName: "",
      lastName: "",
      title: "",
      category: "",
      content: "",
      time: "",
    });
    navigate("/");
  };
  return (
    <>
      {console.log(empty)}
      <div className="sidebar-wrapper">
        <div className="menubar">
          <SideMenu></SideMenu>
        </div>

        <div className="post-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <Controller
                control={control}
                name="title"
                render={({ field }) => (
                  <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    color="secondary"
                    placeholder="Enter Your Title"
                    fullWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="input-wrapper">
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                  <TextField
                    className="field"
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    color="secondary"
                    placeholder="Enter Your First Name"
                    fullWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="input-wrapper">
              <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                  <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    color="secondary"
                    placeholder="Enter Your Last Name"
                    fullWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="input-wrapper">
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel
                        color="secondary"
                        id="demo-simple-select-label"
                      >
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        color="secondary"
                        id="category"
                        value={age}
                        label="Category"
                        onChange={handleChange}
                        {...field}
                      >
                        <MenuItem value={"Travel"}>Travel</MenuItem>
                        <MenuItem value={"Sports"}>Sports</MenuItem>
                        <MenuItem value={"Nature"}>Nature</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}
              />
            </div>
            <div className="input-wrapper">
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
            </div>
            <div className="btn-wrapper">
              {empty ? (
                <button
                  className={`btn-hover color-7 `}
                  type="submit"
                  color="secondary"
                >
                  Create new Blog
                </button>
              ) : (
                <button
                  className={`btn-hover color-7 `}
                  type="submit"
                  color="secondary"
                  disabled
                >
                  Create new Blog
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPosts;
