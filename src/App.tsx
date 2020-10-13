import * as React from 'react'

export interface AppProps {
  name: string
}

export const App: React.FC<AppProps> = (props: AppProps) => <h1>Hi! Welcome to {props.name}!</h1>
