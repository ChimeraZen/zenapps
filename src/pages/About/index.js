// Config
import React from 'react'
import { db } from '../../config/firebase/firebase'

// Components
import {  Column,
          Paragraph,
          Row,TextBlock,
          Title } from '../../components/Bootstrap'

// Styles
import './styles.css'

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
      <Row className="about-page" withWrap withPadding>
        <Column type="small" withPadding>
          <TextBlock>
            <Title type="simple">Why are we here?</Title>
            <Paragraph>
              This isn't a philosophical question. I mean, why are we here on this page? Well, I assume it's to get to know more about me, and what it is that I do, of course!
            </Paragraph>
            <Paragraph>
              Born and raised in Ontario, Canada, I've spent the last 20+ years watching the progression of the internet age. With the ever-changing environment that is programming, I find that every day provides me with an opportunity to learn and apply all that I've acquired in my search for more knowledge. That everything can be applied to another in some fashion has been the driving force behind this quest and many others, but that's a story for another time.
            </Paragraph>
          </TextBlock>
        </Column>
        
        <Column type="medium" withPadding>
          <TextBlock>
            <Title type="simple">Once upon another time...</Title>
            <Paragraph>
              While cooking some pizza pockets in-between watching episodes of "The Fresh Prince of Bel-air" and "Saved by the Bell", I was introduced to the internet. Once the squealing squelches of the dial-up modem subsided and the panicked perils of a picked-up telephone became common, I promptly dove into the sea of information before me.
            </Paragraph>
            <Paragraph>
              Landing in the city of Geo (Geocities), I was exposed to the incredible possibilities that exist within the interconnected framework of the internet. I realized that anything I wanted to know or show the world was just a mouse-click away.
            </Paragraph>
            <Paragraph>
              It didn't take long to realize that blinking text and midi-heavy pages might seem "cool", but from a User Experience stand-point, it's a terribly awful experience!! That had nothing on the brain-busting UH-OH!'s of ICQ however. Figuring out how to modify a program's visual and functional aspects using programs downloaded from the internet unleashed a thirst for knowledge that would never be quenched.
            </Paragraph>
            <Paragraph>
              Since then, I've expanded my skillset to include, among other things, HTML5, CSS3 & preprocessors, PHP & MySQL, and Joomla/WordPress and, most recently, ReactJS.
            </Paragraph>
          </TextBlock>
        </Column>
      </Row>
  }
}

export default About
