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
        phone: "+91620-320-4125",
      content:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",

        address: "474 Banerjee Fords",
      },
      {
        id: 2,
        title: "Great Things Never Came from Comfort Zone",
        firstName: "Suyas",
        lastName: "karan",
        phone: "+91953-928-4930",
      content:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",

        address: "52520 Bhisham Brooks",
      },
      {
        id: 3,
        title: "Paths Are Made by Walking",
        firstName: "Ashish",
        lastName: "Gpta",
        phone: "+91-917-1416065",
      content:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",

        address: "78079 Patel Park",
      },
      {
        title: "The Secret of Getting Ahead is Getting Started",
        id: 4,
        firstName: "risabh",
        lastName: "joshi",
        phone: "+91-644-6939697",
      content:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",

        address: "57761 Shreyashi Junctions",
      },
      {
        title: "Even the all-powerful Pointing has no control",
        id: 5,
        firstName: "Bhum",
        lastName: "B",
        phone: "+91-704-4124157",
      content:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",

        address: "860 Gautama Turnpike",
      },
     
    ],
     

    

    User: {
      id:"",
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phone: "",
      category:"",
      content:"",

      time:"",
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
        address: "",
        phone: "",
        category:"",
      content:"",

        time:""
      };
    },
    addUser: (state, action) => {
      state.Users = [action.payload, ...state.Users];
      localStorage.setItem("user", state.Users)

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
