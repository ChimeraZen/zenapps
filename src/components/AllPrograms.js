// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db } from '../config/firebase/firebase'
import { NavLink } from 'react-router-dom'

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
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexGrow: 1,
    width: '100%',
    height: '100%',
    paddingTop: '3%',
    background: 'inherit',
    overflow: 'hidden',
    zIndex: 1,
  },
  
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '30%',
    minWidth: '200px',
    height: 'fit-content',
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
    console.log(this.state)
    return (
      this.state !== null
        ? <Paper className={classes.root} elevation={0}>
            {
              this.state.programs.map((program, i) =>
                <Card className={classes.card} elevation={1}>
                  <CardContent className={classes.cardContent}>
                    <NavLink key={"program" + i} to={program.link} className={classes.anchor}>
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
              )
            }
          </Paper>
        : <CircularProgress className={classes.progress} size={50} />
    )
  }
}

AllPrograms.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AllPrograms)
