import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import FrontPage from './FrontPage'

const Roots = () => (
  <Switch>
    <Route exact path='/' component={FrontPage} />
    {/*
    <Route path='/admin/posts' render={(props) => (
      <Admin {...props} type={'posts'}/>
    )} />
    
    <Route path='/admin/categories' render={(props) => (
      <Admin {...props} type={'categories'}/>
    )} />
    */}
  </Switch>
)


export default Roots
