// Config
import React from 'react'
import { db } from '../../config/firebase/firebase'

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
    return this.state !== null &&
      <Paper className="credentials-page" elevation={0} square={true}>
        <div className="large-column">
          {this.state.page.items.map((item, index) => 
            <MuiCard key={"item" + index} className="card" elevation={1}>
              <CardContent>
                <Typography className="position" variant="title" component="h3">
                  {item.position}
                </Typography>

                <Typography variant="subheading" component="h4">
                  {item.workplace}
                </Typography>
                <div className="row">
                  <Typography className="location">
                    {item.location}
                  </Typography>

                  <Typography className="duration">
                    {item.startDate} - {item.endDate}
                  </Typography>
                </div>
                
                <Divider className="divider"/>

                <Typography className="description">
                  {item.content}
                </Typography>

              </CardContent>
            </MuiCard>
          )}
        </div>
        <div className="small-column">
          <Typography className="title" variant="title" component="h2">
            Work Experience
          </Typography>
          <Typography paragraph component="p">
            In my time as a Web Developer and Digital Consultant, I've had the pleasure of working with people of all ages and helping to guide them as they learn more about the marvel that is the internet and the advancement of technology in our day-to-day lives.
          </Typography>
          <Typography paragraph component="p">
            With my skills gained from a Law & Security Administration program, planning/teaching from a Radiation Safety Officer course, and life in general, I have many additional skills to offer because I believe that you never know when what you know will come in handy!
          </Typography>
        </div>
        <div className="small-column">
          <Card title="Additional Skills" className="dark-text">
            <LinearMeter title="Collaboration" percent="100" />
            <LinearMeter title="Leadership/Management" percent="98" />
            <LinearMeter title="Planning/SCRUM" percent="98" />
          </Card>
        </div>
      </Paper>
  }
}

export default Credentials
