import React, { useEffect, useState } from 'react'
import { getRepos } from '../../api/GitHubApi'
import { List, Card, Tag } from 'antd'
import { colorFromString } from '../../helpers/helpers'

import './GitHubStats.style.css'

export const GitHubStats = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getRepos().then((response) => {
      setRepos(response as any)
    })
  }, [])

  return (
    <div className="github-container">
      {repos && repos.length > 0 && (
        <div className="repos-container">
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={repos}
            renderItem={(repo) => (
              <List.Item>
                <Card title={repo.name}>
                  <a href={repo.html_url}>{repo.html_url}</a>
                  <div>{repo.description}</div>
                  <br />
                  {repo.language && (
                    <Tag color={colorFromString(repo.language)}>{repo.language}</Tag>
                  )}
                </Card>
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  )
}
