import { OpenNotification } from '../components/Toaster'

const gitHubURL = 'https://api.github.com/'

export type ApiUser = {
  role: string
  username: string
  email: string
  status: string
}

type GetUsersResponse = {
  users: Array<ApiUser>
}

export const getUsers = async (): Promise<GetUsersResponse> => {
  let response = { users: [] as any }
  try {
    const request = await fetch(`${gitHubURL}orgs/Clinical-Genomics/members`, {
      mode: 'cors',
    })
    response = await request.json()
  } catch (error) {
    OpenNotification({
      type: 'error',
      message: 'Unable to fetch',
      description: 'Could not fetch GitHub users',
    })
  }
  return response
}
