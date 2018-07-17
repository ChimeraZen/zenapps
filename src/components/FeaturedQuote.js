import React from 'react'
import PropTypes from 'prop-types'

import {  Card,
          CardContent,
          Typography,
          withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    fontFamily: "'IM Fell English SC', serif",
    background: 'rgba(0,0,0,0.65)',
    [theme.breakpoints.up('xs')]: {
      width: '400px',
      fontSize: '25px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '440px',
      fontSize: '25px',
    },
    [theme.breakpoints.up('md')]: {
      width: '600px',
      fontSize: '25px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '800px',
      fontSize: '30px',
    },
    [theme.breakpoints.up('xxl')]: {
      width: '1200px',
      fontSize: '57px',
    },
  },
  
  author: {
    fontFamily: 'inherit',
    marginLeft: 'auto',
    fontSize: '20px',
    color: '#FFF',
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
    },
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
  
  cardcontent: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
     padding: '24px'
    
  },
  
  content: {
    fontStyle: 'italic',
    fontFamily: 'inherit',
    color: '#FFF',
    textAlign: 'center',
    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
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
