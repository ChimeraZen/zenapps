// Config
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as ProgramList from '../programs'

export const Programs = () => 
  <Switch>
    <Route path="/programs" component={ProgramList.VigenereCipher} />
  </Switch>

export default Programs
