import React from 'react'
import PropTypes from 'prop-types'

import {  Card,
          CardContent,
          Typography,
          withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '60%',
    fontFamily: "'IM Fell English SC', serif",
    background: 'rgba(0,0,0,0.65)',
  },
  
  author: {
    fontFamily: 'inherit',
    marginLeft: 'auto',
    fontSize: '20px',
    color: '#FFF'
  },
  
  cardcontent: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },
  
  content: {
    fontStyle: 'italic',
    fontFamily: 'inherit',
    color: '#FFF',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: '57px',
    },
  },
})

class FeaturedQuote extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Card className={classes.root}>
        <CardContent className={classes.cardcontent}>
          <Typography className={classes.content}>
            “{this.props.children}”
          </Typography>
          
          <Typography className={classes.author}>
            ~{this.props.author}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

FeaturedQuote.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FeaturedQuote)
