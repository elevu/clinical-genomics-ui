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

export const getRepos = async (): Promise<GetUsersResponse> => {
  let response = { users: [] as any }
  try {
    const request = await fetch(`${gitHubURL}orgs/Clinical-Genomics/repos`, {
      mode: 'cors',
    })
    response = await request.json()
  } catch (error) {
    OpenNotification({
      type: 'error',
      message: 'Unable to fetch',
      description: 'Could not fetch GitHub repos',
    })
  }
  return response
}
