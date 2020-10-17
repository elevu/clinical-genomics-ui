import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SettingState } from './types'

const initialstate = {
  token: null,
  user: {
    name: null,
    email: null,
    avatar: null,
  },
} as SettingState

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialstate,
  reducers: {
    setSettings: (_, action: PayloadAction<SettingState>) => action.payload,
    resetSettings: () => initialstate,
  },
})

export const { setSettings, resetSettings } = settingsSlice.actions
export default settingsSlice.reducer
