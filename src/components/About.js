// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db } from '../config/firebase/firebase'

// Styles
import {  Paper,
          Typography,
          withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    padding: '3%',
  },
  
  container: {
    marginBottom: '40px',
    '&:last-child': {
      marginBottom: 0
    },
  },
  
  lastParagraph: {
    marginBottom: 0
  },
  
  progress: {
    width: '100%',
    margin: '0 auto'
  },
  
  title: {
    paddingLeft: '5px',
    marginBottom: '3px',
    borderLeft: '3px solid #4caf50',
  }
})


export class About extends React.Component {
  
  componentDidMount() {
    db.collection("pages")
      .doc("about")
      .get()
      .then(snap => {
        const data = snap.data()
        this.setState({
          page: data.items
        })
      })
  }
  
  render() {
    const { classes } = this.props
    
    return (
      this.state !== null &&
        <Paper className={classes.root} elevation={0}>
          {this.state.page.map((item, i) => 
            <div key={"item" + i} className={classes.container}>
              <Typography className={classes.title} variant="title" component="h2">
                {item.title}
              </Typography>
              <React.Fragment>
                {
                  item.content.map((paragraph, ii) => 
                    <Typography key={"paragraph" + ii} className={ii === (item.content.length - 1) ? classes.lastParagraph : ""} paragraph component="p">
                      {paragraph}
                    </Typography>
                  )
                }
              </React.Fragment>
            </div>
          )}
        </Paper>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
