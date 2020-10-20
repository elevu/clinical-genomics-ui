import React, { useEffect, useState } from 'react'
import { getRepos } from '../../api/GitHubApi'
import { List, Card, Spin, Tag } from 'antd'
import { colorFromString } from '../../helpers/helpers'

import './GitHubStats.style.css'

export const GitHubStats = () => {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getRepos().then((response) => {
      setRepos(response as any)
      setTimeout(() => {
        setIsLoading(false)
      }, 600)
    })
  }, [])

  return (
    <div className="github-container">
      {isLoading && <Spin size="large" />}
      {!isLoading && repos?.length > 0 && (
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
