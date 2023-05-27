import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu: (state) => {
      state.isMenuOpen = false
    },
    openMenu: (state) => {
      state.isMenuOpen = true
    },
  },
})

export const { toggleMenu, closeMenu, openMenu } = appSlice.actions
export default appSlice.reducer
