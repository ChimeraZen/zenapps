// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db } from '../config/firebase/firebase'

// Styles
import {  Card,
          CardContent,
          Divider,
          Paper,
          Typography,
          withStyles } from '@material-ui/core'

const styles = theme => ({
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    flexBasis: '300px',
    minWidth: '300px',
    margin: '15px',
  },
  
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '15px',
    background: 'inherit',
  },
  
  position: {
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
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
      this.state !== null &&
        <Paper className={classes.content} elevation={0}>
          {this.state.page.items.map((item, index) => 
            <Card key={"item" + index} className={classes.card} elevation={1}>
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
          )}
        </Paper>
    )
  }
}

Credentials.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Credentials)
