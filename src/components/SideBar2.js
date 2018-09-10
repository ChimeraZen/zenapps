import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import {  //Collapse,
          Divider,
          List,
          ListItem,
          ListItemText,
          withStyles } from '@material-ui/core'

const styles = theme => ({
  avatar: {
    width: 150,
    height: 150,
    margin: '10px auto'
  },
  
  button: {
    padding: '10px'
  },
  
  quickLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px',
    width: '100%',
  },
  
  listItem: {
    justifyContent: 'center',
    padding: 0,
  },
  menu: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  
  anchor: {
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit'
  },
  
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px'
  },
  
  nested: {
    paddingLeft: '35px'
  },
  
  progress: {
    display: 'block',
    margin: 'auto'
  },
  
  subMenu: {
    background: theme.palette.divider
  },
  
  toolbarTheme: theme.mixins.toolbar,
})

class SideBar2 extends React.Component {
  state = {
    avatar: "",
    open: false,
  }
  
  handleClick = () => {
    this.setState({ open: !this.state.open })
  }
  
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <List
          className={classes.root}
          component="nav"
        >
          {
            this.props.menu.map((item, i) => 
              i === 0
                ? <NavLink key={"nav-" + i} to={'/' + item.route} className={classes.anchor}>
                    <ListItem button>
                      <ListItemText>
                        {item.title}
                      </ListItemText>
                    </ListItem>
                    <Divider />
                  </NavLink>
                                
                : <NavLink key={"nav-" + i} to={'/' + item.route} className={classes.anchor}>
                    <ListItem button>
                      <ListItemText>
                        {item.title}
                      </ListItemText>
                    </ListItem>
                  </NavLink>
            )
          }
        </List>
      </React.Fragment>
    )
  }
}

SideBar2.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideBar2)
