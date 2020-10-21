import React from 'react'
import { Result } from 'antd'

export const Error = () => {
  return <Result status="500" title="Error" subTitle="Something went wrong, try again!" />
}
