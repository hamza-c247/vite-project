import { createSlice } from "@reduxjs/toolkit";

export const Favslice = createSlice({
  name: "Favs",
  initialState: {
    Favs: [

    ],

    Fav: {
      id: "",
      firstName: "",
      lastName: "",
      category: "",
      content:"",
      time: "",
    },
  },
  reducers: {
    getFavUser: (state, action) => {
      state.Fav = state.Favs.find((el) => el.id == action.payload);
    },
    clearFavUser: (state) => {
      state.Fav = {
        firstName: "",
        lastName: "",
        category: "",
        content:"",
        time: "",
      };
    },
    addFavUser: (state, action) => {
      state.Favs = [action.payload, ...state.Favs];
    },
    updateFavUser: (state, action) => {
      state.Favs = state.Favs.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    deleteFavUser: (state, action) => {
      state.Favs = state.Favs.filter((el) => el.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getFavUser,
  clearFavUser,
  addFavUser,
  updateFavUser,
  deleteFavUser,
} = Favslice.actions;

export default Favslice.reducer;
