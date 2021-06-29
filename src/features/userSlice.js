import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null; // empty stacks
    },
  },
});

export const { login } = userSlice.actions;

//warn ==> The function below is called a selector and allows us to select a value from
//warn ==> the state. Selectors can also be defined inline where they're used instead of
//warn ==> in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default userSlice.reducer;
