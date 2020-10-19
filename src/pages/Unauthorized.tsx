import React from 'react'
import { Result } from 'antd'

export const Unauthorized = () => {
  return (
    <Result
      status="403"
      title="Not authorized"
      subTitle="Login with your Clinical Genomics Google account to access this page"
    />
  )
}
