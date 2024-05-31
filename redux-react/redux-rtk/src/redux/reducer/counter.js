import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  demo: true
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// export our action related to this reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export the reducer
export const counterReducer = counterSlice.reducer