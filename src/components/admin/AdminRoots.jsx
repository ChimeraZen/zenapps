// Config
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Admin from './Admin'

export const AdminRoots = () => (
  <Switch>
    <Route exact path='/admin' component={Admin} />
    {/*
    <Route path='/admin/posts' render={(props) => (
      <Admin {...props} type={'posts'}/>
    )} />
    
    <Route path='/admin/categories' render={(props) => (
      <Admin {...props} type={'categories'}/>
    )} />
    */ }
  </Switch>
)


export default AdminRoots
