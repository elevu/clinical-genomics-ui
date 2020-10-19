import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Trailblazer } from '../pages/Trailblazer'
import { Genotype } from '../pages/Genotype/Genotype'
import { Vogue } from '../pages/Vogue'
import { Home } from '../pages/Home/Home'
import { Unauthorized } from '../pages/Unauthorized'
import { GitHubStats } from '../pages/GitHubStats/GitHubStats'
import { Error } from '../pages/Error'
import { SignOut } from '../pages/SignOut'
import { LinkList } from './LinkList/LinkList'

export interface RoutesProps {
  token: string
}

export const Routes = (props: RoutesProps) => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/unauthorized" component={Unauthorized}></Route>
      <Route path="/trailblazer" component={props.token ? Trailblazer : Unauthorized}></Route>
      <Route path="/genotype" component={Genotype}></Route>
      <Route path="/vogue" component={Vogue}></Route>
      <Route path="/github-stats" component={GitHubStats}></Route>
      <Route path="/links" component={LinkList}></Route>
      <Route path="/error" component={Error}></Route>
      <Route path="/signed-out" component={SignOut}></Route>
    </Switch>
  )
}
