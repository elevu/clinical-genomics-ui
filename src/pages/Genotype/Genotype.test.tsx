import * as React from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Genotype } from './Genotype'

test('renders learn react link', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <Genotype />
    </Router>
  )
  const linkElement = getByText(/This page is under development, coming soon!/i)
  expect(linkElement).toBeInTheDocument()
})
