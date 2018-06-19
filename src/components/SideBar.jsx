import React from 'react'

import Divider from '@material-ui/core/Divider'

import SideBarContact from './SideBarContact'
import SideBarMenu from './SideBarMenu'

export const SideBar = () => {
  return (
    <React.Fragment>
      <SideBarContact />
      <Divider />
      <SideBarMenu />
    </React.Fragment>
  )
}

export default SideBar
