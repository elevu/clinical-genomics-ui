import React from 'react'
import { connect } from 'react-redux'
import { Result } from 'antd'
import { compose } from '@reduxjs/toolkit'
import { setSettings as setSettingsAction } from '../domain/settings/slice'

const mapDispatch = { setSettings: setSettingsAction } as const

const ErrorPageComponent = () => {
  return <Result status="500" title="Error" subTitle="Something went wrong, try again!" />
}

export const Error = compose(connect(null, mapDispatch))(ErrorPageComponent)
