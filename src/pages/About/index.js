// Config
import React from 'react'
import { db } from '../../config/firebase/firebase'

// Components
import {  Column,
          Row } from '../../components/Bootstrap'

// Styles
import './styles.css'
import { Typography } from '@material-ui/core'

class About extends React.Component {
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
      <Row className="about-page" withPadding>
        {this.state.page.map((item, i) => 
          <Column key={"item" + i} type="small" withPadding>
            <Typography className="title" variant="title" component="h2">
              {item.title}
            </Typography>
            {item.content.map((paragraph, ii) => 
              <Typography key={"paragraph" + ii} className={ii === (item.content.length - 1) ? "lastParagraph" : ""} paragraph component="p">
                {paragraph}
              </Typography>
            )}
          </Column>
        )}
      </Row>
  }
}

export default About
