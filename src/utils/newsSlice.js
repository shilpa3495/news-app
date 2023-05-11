import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "./constants";

export const getNews = createAsyncThunk("news/getNews", async () => {
  const response = await axios.get(baseURL);
  return response.data.articles;
});

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    loading: "idle",
    error: null,
  },
  reducers: {
    addBookmark: (state, action) => {
      const index = action.payload;
      let tempNews = state.news[index];
      tempNews = { ...tempNews, isBookmark: true };
      state.news[index] = tempNews;
    },

    removeBookmark: (state, action) => {
      const index = action.payload;
      let tempNews = state.news[index];
      tempNews = { ...tempNews, isBookmark: false };
      state.news[index] = tempNews;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.news = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getNews.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export const { addBookmark, removeBookmark } = newsSlice.actions;

export default newsSlice.reducer;
