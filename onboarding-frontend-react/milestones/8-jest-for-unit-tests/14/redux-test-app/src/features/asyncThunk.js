import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCount = createAsyncThunk("counter/fetchCount", async () => {
  const response = await axios.get("/api/count");
  return response.data.count;
});

const asyncSlice = createSlice({
  name: "counter",
  initialState: { value: 0, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCount.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default asyncSlice.reducer;
