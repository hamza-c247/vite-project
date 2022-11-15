import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Initial/Userslice";
import FavReducer from "./Initial/Favslice";

export default configureStore({
  reducer: {
    User: UserReducer,
    Fav: FavReducer,
  },
});
