export type UserInfo = {
  name: string | null
  email: string | null
  avatar: string | null
}

export type SettingState = {
  token: string | null
  user: UserInfo
}
