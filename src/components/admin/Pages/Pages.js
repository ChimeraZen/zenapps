import React from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'

// Components
import { AllPages } from './'

export const Pages = () => 
  <Switch>
    <Route path="/admin/pages" component={AllPages} />
  </Switch>

export default withRouter(Pages)
