import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Abhishek Panwar" },
  { id: "1", name: "John Abraham" },
  { id: "2", name: "Chris Hemsworth" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
