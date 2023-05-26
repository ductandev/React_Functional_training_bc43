import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    component: <p>Default</p>
}

const modalReducer = createSlice({
  name: 'modalReducer',
  initialState,
  reducers: {
    setModelAction: (state, action) => {
        state.component = action.payload;
    },
  }
});

export const {setModelAction} = modalReducer.actions

export default modalReducer.reducer