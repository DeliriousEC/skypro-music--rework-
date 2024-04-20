import { createSlice } from "@reduxjs/toolkit"

const AUTH_INFO = 'auth'

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_INFO))
  } catch (error) {
    console.error(error)
    return null
  }
}

const initialState = {
  id: null,
  access: null,
  refresh: null,
  username: null,
}

export const authSlice = createSlice({
  name: 'authReduces',
  initialState: getAuthFromLocalStorage() ?? initialState,

  reducers: {
    
    setAuth: (state, action) => {
      const { access, refresh, username, id } = action.payload ?? initialState
      state.access = access
      state.refresh = refresh
      state.username = username
      state.id = id
      localStorage.setItem(AUTH_INFO, JSON.stringify(state))
    },

    clearAuth: (state) => {
      return initialState
    }
 },

})

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;