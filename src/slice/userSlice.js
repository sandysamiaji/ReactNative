import {createSlice} from '@reduxjs/toolkit';

const initialState = {user: {username: '', email: ''}};

export const userSlice = createSlice({
  name: 'dataUser',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: state => {
      state.user = {username: '', email: ''};
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
