import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Trailblazer } from '../pages/trailblazer'
import { Genotype } from '../pages/genotype/genotype'
import { Vogue } from '../pages/vogue'
import { Home } from '../pages/home/home'
import { Unauthorized } from '../pages/unauthorized'
import { ErrorPage } from '../pages/ErrorPage'
import { SignOutPage } from '../pages/SignOutPage'

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
      <Route path="/error">
        <ErrorPage />
      </Route>
      <Route path="/signed-out">
        <SignOutPage />
      </Route>
    </Switch>
  )
}
