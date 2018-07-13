// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db } from '../config/firebase/firebase'

// Styles
import {  Card,
          CardContent,
          CircularProgress,
          Divider,
          Paper,
          Typography,
          withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
  },
  
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '30%',
    minWidth: '200px',
  },
  
  cardContent: {
    
  },
  
  content: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingTop: '3%',
    background: 'inherit',
  },
  
  interface: {
    width: '100%',
    height: '100%'
  },
  
  position: {
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  
  title: {
    width: '100%',
    fontSize: '40px',
    margin: '2%',
    padding: '0 5px',
    textTransform: 'uppercase',
    borderLeft: '3px solid ' + theme.palette.primary.main
  },
  
  toolbarTheme: theme.mixins.toolbar,
})

class Credentials extends React.Component {
  
  componentDidMount() {
    db.collection("pages").doc("credentials")
    .get()
    .then(doc => {
      const page = doc.data()
      this.setState({
        page
      })
    }).catch(error => console.log("Error getting document: ", error))
  }
  
  render() {
    const { classes } = this.props
    
    return (
      this.state !== null
        ? <Paper className={classes.content} elevation={0}>
            {this.state.page.items.map((item, index) => {
              return (
                <Card key={item + index} className={classes.card} elevation={1}>
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.position} variant="title" component="h3">
                      {item.position}
                    </Typography>

                    <Typography variant="subheading" component="h4">
                      {item.workplace}
                    </Typography>
                    <div className={classes.row}>
                      <Typography className={classes.location}>
                        {item.location}
                      </Typography>

                      <Typography className={classes.duration}>
                        {item.startDate} - {item.endDate}
                      </Typography>
                    </div>
                    <Divider className={classes.divider}/>

                    <Typography className={classes.description}>
                      {item.content}
                    </Typography>

                  </CardContent>
                </Card>
              )
            })}
          </Paper>
        : <CircularProgress className={classes.progress} size={50} />
    )
  }
}

Credentials.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Credentials)
