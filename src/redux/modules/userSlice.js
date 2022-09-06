import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

//Action creators는 reducer함수에 생성됩니다.
export const {} = userSlice.actions;

export default userSlice.reducer;