import { createSlice } from "@reduxjs/toolkit";

export const Userslice = createSlice({
  name: "user",
  initialState: {
    Users: [
      {
        id: 1,
        title: "A Loving Heart is the Truest Wisdom",
        firstName: "Hamza",
        lastName: "Khan",
        created_time: "Mon Nov 14 2022 18:14:42 GMT+0530 (India Standard Time)",
        content:
          "A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      },
      {
        id: 2,
        title: "Great Things Never Came from Comfort Zone",
        firstName: "Suyas",
        lastName: "karan",
        created_time: "Mon Nov 14 2022 18:14:42 GMT+0530 (India Standard Time)",
        content:
          "A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      },
      {
        id: 3,
        title: "Paths Are Made by Walking",
        firstName: "Ashish",
        lastName: "Gpta",
        created_time: "Mon Nov 14 2022 18:14:42 GMT+0530 (India Standard Time)",
        content:
          "A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      },
      {
        title: "The Secret of Getting Ahead is Getting Started",
        id: 4,
        firstName: "risabh",
        lastName: "joshi",
        created_time: "Mon Nov 14 2022 18:14:42 GMT+0530 (India Standard Time)",

        content:
          "A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.vA small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      },
      {
        title: "Even the all-powerful Pointing has no control",
        id: 5,
        firstName: "Bhum",
        lastName: "B",
        created_time: "Mon Nov 14 2022 18:14:42 GMT+0530 (India Standard Time)",

        content:
          "A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      },
    ],

    User: {
      id: "",
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phone: "",
      category: "",
      content: "",

      time: "",
    },
  },
  reducers: {
    UserFavourite: (state, action) => {
      state.Fav = [action.payload, ...state.Users];
    },

    getUser: (state, action) => {
      state.User = state.Users.find((el) => el.id == action.payload);
    },
    clearUser: (state) => {
      state.User = {
        firstName: "",
        lastName: "",
        title: "",
        category: "",
        content: "",
        time: "",
      };
    },
    addUser: (state, action) => {
      state.Users = [action.payload, ...state.Users];
      localStorage.setItem("user", state.Users);
    },
    updateUser: (state, action) => {
      state.Users = state.Users.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    deleteUser: (state, action) => {
      state.Users = state.Users.filter((el) => el.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getUser,
  clearUser,
  addUser,
  updateUser,
  deleteUser,
  UserFavourite,
} = Userslice.actions;

export default Userslice.reducer;
