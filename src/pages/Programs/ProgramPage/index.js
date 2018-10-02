// Config
import React from 'react'
import { db } from '../../../config/firebase/firebase'
import { NavLink } from 'react-router-dom'

// Components
import {  Column,
          Row } from '../../../components/Bootstrap'
import Card from '../../../components/Card/'
import { LinearMeter } from '../../../components/Meters/'

// Styles
import './styles.css'
import {  Card as MuiCard,
          CardContent,
          Divider,
          Typography } from '@material-ui/core'


export class ProgramDetails extends React.Component {
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
    return this.state !== null &&
      <Row className="programs-page" withPadding>
        <Column type="small" withPadding>
          <Card title="Languages" className="light-text">
            <LinearMeter title="HTML5" percent="100" />
            <LinearMeter title="CSS3" percent="98" />
            <LinearMeter title="JavaScript" percent="98" />
            <LinearMeter title="PHP" percent="95" />
            <LinearMeter title="MySQL" percent="90" />
            <LinearMeter title="ReactJS" percent="85" />
          </Card>
        </Column>
        <Column type="small" withPadding>
          {this.state.programs.map((program, i) =>
            <MuiCard key={"program" + i} className="card" elevation={1}>
              <CardContent className="cardContent">
                <NavLink to={program.link}>
                  <Typography className="position" variant="title" component="h3">
                    {program.title}
                  </Typography>
                </NavLink>
                <Typography className="position" variant="caption">
                  {program.version}
                </Typography>
                <Divider />

                <Typography>
                  {program.description}
                </Typography>
              </CardContent>
            </MuiCard>
          )}
        </Column>
        <Column type="small" withPadding>
          <Typography className="title light-text" variant="title" component="h2">
            My Programs
          </Typography>
          <Typography paragraph component="p" className="light-text">
            Over the years, I've written many different scripts in many different languages. Whether I'm using PHP to query a MySQL database, jQuery/JavaScript to work with the DOM, or React to create a reusable component, I have a desire to follow a standard operating procedure.
          </Typography>
          <Typography paragraph component="p" className="light-text">
            Since starting to learn React, I have developed my skills to the point where I've built a user-authorized administrative dashboard, and front-end website. Through a secure connection to Google Firebase, I have been able to build an object-based database and, with a custom API, organize and return the database information in a usable format.
          </Typography>
        </Column>
        <Column type="small" withPadding>
          <Card title="Skills" className="light-text">
            <LinearMeter title="Scripting/Web Design" percent="100" />
            <LinearMeter title="Object-Oriented Programming" percent="95" />
            <LinearMeter title="React Component Development" percent="95" />
          </Card>
        </Column>
      </Row>
  }
}
export default ProgramDetails
