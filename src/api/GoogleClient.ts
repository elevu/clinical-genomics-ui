import history from '../history'
import { ActionCreatorWithPayload, ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { SettingState } from '../domain/settings/types'

const signIn = (
  setSettings: ActionCreatorWithPayload<SettingState, string>,
  initialized = false
) => async () => {
  const GoogleAPI = (window as any).gapi

  if (!initialized) {
    await GoogleAPI.client.init({
      apiKey: 'fake-key',
      clientId: 'fake-token',
      scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      prompt: 'select_account',
    })
  }

  const GoogleAuth = GoogleAPI.auth2.getAuthInstance()
  if (!GoogleAuth.isSignedIn.get()) {
    try {
      await GoogleAuth.signIn()
    } catch (error) {
      return history.push('/error')
    }
  }
  const user = GoogleAuth.currentUser.get()
  const token = user.getAuthResponse().access_token
  const profile = user.getBasicProfile()

  setSettings({
    token,
    user: {
      name: profile.getName(),
      email: profile.getEmail(),
      avatar: profile.getImageUrl(),
    },
  })
  history.push('/')
}

export const initGoogleClient = (setSettings: ActionCreatorWithPayload<SettingState, string>) => {
  ;(window as any).gapi.load('client:auth2', signIn(setSettings))
}

export const retryGoogleClient = async (
  setSettings: ActionCreatorWithPayload<SettingState, string>
) => {
  const GoogleAPI = (window as any).gapi
  const GoogleAuth = GoogleAPI.auth2.getAuthInstance()
  await GoogleAuth.signOut()

  signIn(setSettings, true)()
}

export const signOutGoogleClient = async (resetSettings: ActionCreatorWithoutPayload<string>) => {
  const GoogleAPI = (window as any).gapi
  const GoogleAuth = GoogleAPI.auth2.getAuthInstance()
  await GoogleAuth.signOut()
  resetSettings()
  history.push('/signed-out')
}
