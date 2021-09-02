import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeatherSearch } from "../services/api-helper";

export const fetchSearch = createAsyncThunk(
  "weatherSearches/fetchSearch",
  async (zipCode) => {
    console.log(zipCode);
    const data = fetchWeatherSearch(zipCode);
    console.log(data);
    return data;
  }
);

const searchSlice = createSlice({
  name: "weatherSearches",
  initialState: {
    searchWeather: null,
    status: null,
  },

  extraReducers: {
    [fetchSearch.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSearch.fulfilled]: (state, { payload }) => {
      state.searchWeather = payload;
      state.status = "success";
    },
    [fetchSearch.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default searchSlice.reducer;
