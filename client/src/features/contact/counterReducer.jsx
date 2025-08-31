import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 50 };


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    decrement(state, action) {
      state.value -= action.payload;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export const incrementLegacy = (amount = 1) => ({ type: "counter/incremented", payload: amount });
export const decrementLegacy = (amount=1) => ({ type: "counter/decremented", payload: amount });

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + action.payload };
    case "counter/decremented":
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
}
