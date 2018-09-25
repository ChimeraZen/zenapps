import React from 'react'
import PropTypes from 'prop-types'
import { privateAPI } from '../../../api'

import {  AppBar,
          Tabs,
          Tab,
          withStyles } from '@material-ui/core'

//import List from '../../programs/List'
import {  DragList,
          DragListItem } from '../../DragList/'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
})

class AllMenus extends React.Component {
  state = {
    menus: {}
  }

  componentDidMount() {
    privateAPI.getAdminMenu()
       .then(menus => {
         const tabs = Object.keys(menus)
         this.setState({ 
           menus, 
           tabs, 
           value: 0
         })
       })
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleSave = (menuSource, items) => {
    const menus = this.state.menus
    
    Object.keys(menus).forEach(menu => {
      if(menu === menuSource) menus[menu] = items
    })
    
    // Save to Firebase
    privateAPI.saveAdminMenu(menus)
    
    // Update State
    this.setState({
      menus
    })
  }
  
  render() {
    const { classes } = this.props,
          { value } = this.state,
          menus = this.state.menus,
          tabs = this.state.tabs
    
    if(Object.keys(menus).length > 0) {
      const lists = Object.keys(menus).map(key => {
        return menus[key]
      })
      
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              {
                tabs && tabs.map((tab, i) => {
                  return <Tab key={tab + i} label={tab} />
                })
              }
            </Tabs>
          </AppBar>
          {
            lists.map((list, i) => 
              value === i && (
                <DragList key={'draglist-' + i}>
                  {list.map((item, ii) => 
                    <DragListItem key={"item" + ii} id={ii}>
                      <span>{item.title}</span>
                      <span>{item.route}</span>
                    </DragListItem>
                  )}
                </DragList>
              )
              /*<DragList key={listitems + i} name={tabs[i]} items={listitems} onSave={this.handleSave} />*/
            )
          }
        </div>
      )
    } else {
      return (
        <div>AllMenus still loading</div>
      )
    }
  }
}

AllMenus.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AllMenus)
