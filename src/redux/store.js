import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./weatherSearchSlice";

export default configureStore({
  reducer: {
    weatherSearches: searchReducer,
  },
});
