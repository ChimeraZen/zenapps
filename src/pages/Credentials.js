// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db, storage } from '../config/firebase/firebase'

// Components
import ZenAppBar from '../components/ZenAppBar'
import Content from '../components/Content'
import FeaturedQuote from '../components/FeaturedQuote'


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
  
  business: {
    fontStyle: 'italic'
  },
  
  card: {
    display: 'inline-flex',
    width: '32%',
    padding: '20px',
    marginBottom: '20px'
  },
  
  cardContent: {
    padding: 0,
    "&:last-child": {
      padding: 0
    }
  },
  
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '0 10px'
  },
  
  content: {
    width: '100%',
    padding: '10px',
  },
  
  description: {
    fontSize: '18px',
  },
  
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
  
  duration: {
    textAlign: 'right',
    textTransform: 'uppercase',
  },
  
  headline: {
    width: '100%',
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    borderBottom: '3px solid',
    borderColor: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: '40px',
    },
  },
  
  interface: {
    width: '100%',
  },
  
  location: {
    textAlign: 'right',
  },
  
  paragraph: {
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: '20px',
    },
  },
  
  position: {
    display: 'flex',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  
  progress: {
    width: '100%',
    margin: '0 auto'
  },
  
  toolbarTheme: theme.mixins.toolbar,
  
  workplace: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  workplaceSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
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
        ? (
            <div className={classes.root}>
              <ZenAppBar title={this.state.page.title} />
              {
                this.state !== null
                  ? <div className={classes.interface}>
                      <div className={classes.toolbarTheme} />
                      <div className={classes.root}>
                        <Paper className={classes.content} elevation={0}>
                          
                          <div className={classes.cards}>
                            <Card className={classes.card} elevation={1}>
                              <CardContent className={classes.cardContent}>
                                <div className={classes.workplace}>
                                  <div className={classes.workplaceSection}>
                                    <Typography className={classes.position} variant="title" component="h3">
                                      Web Developer
                                    </Typography>
                                    <Typography className={classes.business} variant="subheading" component="h4">
                                      Rapid Media
                                    </Typography>
                                  </div>
                                  <div className={classes.workplaceSection}>
                                    <Typography className={classes.location}>
                                      Palmer Rapids, ON
                                    </Typography>
                                    <Typography className={classes.duration}>
                                      June 2015 - Present
                                    </Typography>
                                  </div>
                                </div>
                                <Divider className={classes.divider}/>
                                <Typography className={classes.description}>
                                  Manage updates, backups, and modifications to the CMS system and suggest improvements to security, SEO, UI and overall User Experience
                                </Typography>
                              </CardContent>
                            </Card>
                            <Card className={classes.card} elevation={1}>
                              <CardContent className={classes.cardContent}>
                                <div className={classes.workplace}>
                                  <div className={classes.workplaceSection}>
                                    <Typography className={classes.position} variant="title" component="h3">
                                      Web Developer
                                    </Typography>
                                    <Typography className={classes.business} variant="subheading" component="h4">
                                      Rapid Media
                                    </Typography>
                                  </div>
                                  <div className={classes.workplaceSection}>
                                    <Typography className={classes.location}>
                                      Palmer Rapids, ON
                                    </Typography>
                                    <Typography className={classes.duration}>
                                      June 2015 - Present
                                    </Typography>
                                  </div>
                                </div>
                                <Divider className={classes.divider}/>
                                <Typography className={classes.description}>
                                  Manage updates, backups, and modifications to the CMS system and suggest improvements to security, SEO, UI and overall User Experience
                                </Typography>
                              </CardContent>
                            </Card>

                            <Card className={classes.card} elevation={1}>
                              <CardContent className={classes.cardContent}>
                                <div className={classes.workplace}>
                                  <div className={classes.workplaceSection}>
                                    <Typography className={classes.position} variant="title" component="h3">
                                      Tech Support
                                    </Typography>
                                    <Typography className={classes.business} variant="subheading" component="h4">
                                      Sisters of St.Joseph
                                    </Typography>
                                  </div>
                                  <div className={classes.workplaceSection}>
                                    <Typography className={classes.location}>
                                      Pembroke, ON
                                    </Typography>
                                    <Typography className={classes.duration}>
                                      Oct 2017 - Present
                                    </Typography>
                                  </div>
                                </div>
                                <Divider className={classes.divider}/>
                                <Typography className={classes.description}>
                                  Assist the Sisters with their needs such as: printing an email; updating OS and software on their computers and tablets; and, installing necessary software
                                </Typography>
                              </CardContent>
                            </Card>

                            <Card className={classes.card} elevation={1}>
                              <CardContent className={classes.cardContent}>
                                <div className={classes.workplace}>
                                  <div className={classes.workplaceSection}>
                                    <Typography className={classes.position} variant="title" component="h3">
                                      Web Developer
                                    </Typography>
                                    <Typography className={classes.business} variant="subheading" component="h4">
                                      Pembroke Public Library
                                    </Typography>
                                  </div>
                                  <div className={classes.workplaceSection}>
                                    <Typography className={classes.location}>
                                      Pembroke, ON
                                    </Typography>
                                    <Typography className={classes.duration}>
                                      Apr 2012 - Dec 2012
                                    </Typography>
                                  </div>
                                </div>
                                <Divider className={classes.divider}/>
                                <Typography className={classes.description}>
                                  Assist the Sisters with their needs such as: printing an email; updating OS and software on their computers and tablets; and, installing necessary software
                                </Typography>
                              </CardContent>
                            </Card>
                          </div>
                          
                        </Paper>
                      </div>
                    </div>

                  : <CircularProgress className={classes.progress} size={50} />
              }
            </div>
          )
        : <CircularProgress className={classes.progress} size={50} />
    )
  }
}

Credentials.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Credentials)
