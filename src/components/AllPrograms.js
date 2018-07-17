// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db } from '../config/firebase/firebase'
import { NavLink } from 'react-router-dom'

// Styles
import {  Card,
          CardContent,
          Divider,
          Paper,
          Typography,
          withStyles } from '@material-ui/core'

const styles = theme => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '15px',
    background: 'inherit',
  },
  
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    flexBasis: '300px',
    minWidth: '300px',
    margin: '15px',
  },
})


export class AllPrograms extends React.Component {
  
  componentDidMount() {
    db.collection("pages")
      .doc("programs")
      .get()
      .then(snap => {
        const programs = snap.data()

        this.setState({
          programs: programs.items
        })
      })
  }
  
  render() {
    const { classes } = this.props
    
    return (
      this.state !== null &&
        <Paper className={classes.content} elevation={0}>
          {this.state.programs.map((program, i) =>
            <Card key={"program" + i} className={classes.card} elevation={1}>
              <CardContent className={classes.cardContent}>
                <NavLink to={program.link} className={classes.anchor}>
                  <Typography className={classes.position} variant="title" component="h3">
                    {program.title}
                  </Typography>
                </NavLink>
                <Typography className={classes.position} variant="caption">
                  {program.version}
                </Typography>
                <Divider />

                <Typography className={classes.description}>
                  {program.description}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Paper>
    )
  }
}

AllPrograms.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AllPrograms)
