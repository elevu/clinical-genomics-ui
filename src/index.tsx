import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App name="Clinical Genomics Internal Portal" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
)
