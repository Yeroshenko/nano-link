import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth, Links, Create, Detail } from './pages'

export const useRoutes = isAutenficated => {
  if (isAutenficated) {
    return (
      <Switch>
        <Route path='/links' component={Links} exact />
        <Route path='/create' component={Create} exact />
        <Route path='/detail/:id' component={Detail} />
        <Redirect to='/create' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path={['/', '/login', '/register']} component={Auth} exact />
      <Redirect to='/' />
    </Switch>
  )
}
