// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db } from '../../config/firebase/firebase'

// Styles
import './styles.css'
import {  Paper,
          Typography } from '@material-ui/core'

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
    return this.state !== null &&
      <Paper className="about-page" elevation={0}>
        {this.state.page.map((item, i) => 
          <div key={"item" + i} className="container">
            <Typography className="title" variant="title" component="h2">
              {item.title}
            </Typography>
            {item.content.map((paragraph, ii) => 
              <Typography key={"paragraph" + ii} className={ii === (item.content.length - 1) ? "lastParagraph" : ""} paragraph component="p">
                {paragraph}
              </Typography>
            )}
          </div>
        )}
      </Paper>
  }
}

export default About
