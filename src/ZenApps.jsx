// Config
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import AdminRoots from './components/admin/AdminRoots'
import Roots from './components/Roots'

export const ZenApps = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Roots}/>
      <Route path='/admin' component={AdminRoots}/>
    </Switch>
  </main>
)

export default ZenApps
