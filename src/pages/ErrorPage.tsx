import React from 'react'
import { connect } from 'react-redux'
import { Result, Button } from 'antd'
import { compose } from '@reduxjs/toolkit'

import { retryGoogleClient } from '../api/GoogleClient'
import { setSettings as setSettingsAction } from '../domain/settings/slice'

const mapDispatch = { setSettings: setSettingsAction } as const

type Props = typeof mapDispatch

const ErrorPageComponent = ({ setSettings }: Props) => {
  const handleRetry = () => {
    retryGoogleClient(setSettings)
  }

  return (
    <Result
      status="500"
      title="401"
      subTitle="Sorry, you are not authenticated. Did you use your Clinical Genomics Google account?"
      extra={
        <Button type="primary" onClick={handleRetry}>
          Retry
        </Button>
      }
    />
  )
}

export const ErrorPage = compose(connect(null, mapDispatch))(ErrorPageComponent)
