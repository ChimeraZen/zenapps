// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db } from '../config/firebase/firebase'

// Styles
import {  CircularProgress,
          Paper,
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
  state = {
    page: false
  }
  
  componentDidMount() {
    db.collection("pages").doc("about")
    .get()
    .then(doc => {
      const page = doc.data()
      this.setState({
        page
      })
    })
  }
  
  render() {
    const { classes } = this.props
    const about = this.state.page.items
    
    return (
      about
        ? <Paper className={classes.root} elevation={0}>
            {
              about.map((item, i) => 
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
              )
            }
          </Paper>
        : <CircularProgress className={classes.progress} size={50} />
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
