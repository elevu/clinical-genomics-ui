import React, { useEffect, useState } from 'react'
import { getRepos } from '../../api/GitHubApi'
import { List, Card, Skeleton, Tag } from 'antd'
import { colorFromString } from '../../helpers/helpers'

import './GitHubStats.style.css'

export const GitHubStats = () => {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getRepos().then((response) => {
      setRepos(response as any)
      setIsLoading(false)
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
                <Skeleton loading={isLoading} active>
                  <Card title={repo.name}>
                    <a href={repo.html_url}>{repo.html_url}</a>
                    <div>{repo.description}</div>
                    <br />
                    {repo.language && (
                      <Tag color={colorFromString(repo.language)}>{repo.language}</Tag>
                    )}
                  </Card>
                </Skeleton>
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  )
}
