//https://reqres.in/api/users?page=2

import { configureStore, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const UserSlice = createSlice({
  name: "users",
  initialState: { data: [], page: 1 },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setUsers, setPage } = UserSlice.actions;

export const fetchUsers = (page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    dispatch(setUsers(response.data.data));
  } catch (error) {
    console.error("Error while fecthcig Users:", error.message);
  }
};

const store = configureStore({
  reducer: {
    users: UserSlice.reducer,
  },
});

export default store;
