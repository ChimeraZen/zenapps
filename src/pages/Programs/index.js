// Config
import React from 'react'
import { db } from '../../config/firebase/firebase'
import { NavLink } from 'react-router-dom'

// Components
import Card from '../../components/Card/'
import { LinearMeter } from '../../components/Meters/'

// Styles
import './styles.css'
import {  Card as MuiCard,
          CardContent,
          Divider,
          Paper,
          Typography } from '@material-ui/core'


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
    return this.state !== null &&
      <Paper className="programs-page" elevation={0} square={true}>
        <div className="small-column">
          <Card title="Languages" className="light-text">
            <LinearMeter title="HTML5" percent="100" />
            <LinearMeter title="CSS3" percent="98" />
            <LinearMeter title="JavaScript" percent="98" />
            <LinearMeter title="PHP" percent="95" />
            <LinearMeter title="MySQL" percent="90" />
            <LinearMeter title="ReactJS" percent="85" />
          </Card>
        </div>
        <div className="small-column">
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
        </div>
        <div className="small-column">
          <Typography className="title light-text" variant="title" component="h2">
            Work Experience
          </Typography>
          <Typography paragraph component="p" className="light-text">
            In my time as a Web Developer and Digital Consultant, I've had the pleasure of working with people of all ages and helping to guide them as they learn more about the marvel that is the internet and the advancement of technology in our day-to-day lives.
          </Typography>
          <Typography paragraph component="p" className="light-text">
            With my skills gained from a Law & Security Administration program, planning/teaching from a Radiation Safety Officer course, and life in general, I have many additional skills to offer because I believe that you never know when what you know will come in handy!
          </Typography>
        </div>
        <div className="small-column">
          <Card title="Skills" className="light-text">
            <LinearMeter title="Scripting/Web Design" percent="100" />
            <LinearMeter title="Object-Oriented Programming" percent="95" />
            <LinearMeter title="React Component Development" percent="95" />
          </Card>
        </div>
      </Paper>
  }
}
export default AllPrograms
