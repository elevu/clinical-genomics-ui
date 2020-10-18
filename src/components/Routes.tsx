import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Trailblazer } from '../pages/Trailblazer'
import { Genotype } from '../pages/Genotype/Genotype'
import { Vogue } from '../pages/Vogue'
import { Home } from '../pages/Home/Home'
import { Unauthorized } from '../pages/Unauthorized'
import { GitHubStats } from '../pages/GitHubStats/GitHubStats'
import { ErrorPage } from '../pages/ErrorPage'
import { SignOutPage } from '../pages/SignOutPage'
import { LinkList } from './LinkList/LinkList'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/unauthorized" exact>
        <Unauthorized></Unauthorized>
      </Route>
      <Route path="/trailblazer">
        <Trailblazer></Trailblazer>
      </Route>
      <Route path="/genotype">
        <Genotype></Genotype>
      </Route>
      <Route path="/vogue">
        <Vogue></Vogue>
      </Route>
      <Route path="/github-stats">
        <GitHubStats></GitHubStats>
      </Route>
      <Route path="/links">
        <LinkList></LinkList>
      </Route>
      <Route path="/error">
        <ErrorPage />
      </Route>
      <Route path="/signed-out">
        <SignOutPage />
      </Route>
    </Switch>
  )
}
