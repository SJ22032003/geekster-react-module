import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  loading: false,
  error: null
}

export const getUsersFromApi = createAsyncThunk("users/getUsers", async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllName: (state) => {
      state.users = state.users.map((user) => user.name)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersFromApi.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUsersFromApi.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload
    })
    .addCase(getUsersFromApi.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    })
  }
})

export const { getAllName }= userSlice.actions; 
export const userReducer = userSlice.reducer