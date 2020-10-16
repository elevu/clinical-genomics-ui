import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Trailblazer } from '../pages/trailblazer'
import { Genotype } from '../pages/Genotype/genotype'
import { Vogue } from '../pages/vogue'
import { Home } from '../pages/home'
import { Unauthorized } from '../pages/Unauthorized'

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
    </Switch>
  )
}
