import React from 'react'

import { Result, Button } from 'antd'
import { retryGoogleClient } from '../api/GoogleClient'
import { compose } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { setSettings as setSettingsAction } from '../domain/settings/slice'

const mapDispatch = { setSettings: setSettingsAction } as const

type Props = typeof mapDispatch

const SignOutPageComponent = ({ setSettings }: Props) => {
  const handleRetry = () => {
    retryGoogleClient(setSettings)
  }

  return (
    <Result
      status="success"
      title="Successfully signed out"
      subTitle="In order to use this app you have to be signed in"
      extra={
        <Button type="primary" onClick={handleRetry}>
          Sign in
        </Button>
      }
    />
  )
}

export const SignOutPage = compose(connect(null, mapDispatch))(SignOutPageComponent)
