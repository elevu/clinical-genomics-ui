import React, { useEffect, useState } from 'react'
import { getUsers } from '../../api/GitHub'

import './GitHubStats.style.css'

export const GitHubStats = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers().then((response) => {
      console.log(response)
      setUsers(response as any)
    })
  }, [])

  return (
    <div>
      {users && users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.login}>{user.login}</div>
          ))}
        </div>
      )}
    </div>
  )
}
