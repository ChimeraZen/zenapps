// Config
import React from 'react'
import { storage } from '../../../config/firebase/firebase'
import { NavLink } from 'react-router-dom'


// Components
import {  DropList,
          DropListItem } from '../../Lists/DropList'

// Styles
import './styles.css'

class PublicSideBar extends React.Component {
  componentDidMount() {
    storage.ref(this.props.params.image)
      .getDownloadURL()
      .then(src => {
        this.setState({
          avatar: src,
          open: false,
        })
      })
  }
  
  render() {
    return this.state !== null && 
      <div className="public-sidebar-container">
        <div className={this.props.isOpen ? "public-sidebar closed" : "public-sidebar"}>
          <div className="public-sidebar-avatar">
            <img 
              alt={this.props.params.name} 
              src={this.state.avatar}
            />
          </div>

          <DropList>
            <DropListItem title="Credentials">
              <NavLink to="/credentials">
                <i className="fas fa-user-graduate"></i>
                <span>Credentials</span>
              </NavLink>
            </DropListItem>

            <DropListItem type="droppable" title="Programs">
              <NavLink to="/programs">
                <i className="fas fa-code-branch"></i>
                <span>Programs</span>
              </NavLink>

              <DropList>
                <DropListItem title="Vigenere Cipher">
                  <NavLink to="/programs/vigenere-cipher">
                    <i className="fas fa-code-branch"></i>
                    <span>Vigenere Cipher</span>
                  </NavLink>
                </DropListItem>
              </DropList>
            </DropListItem>

            <DropListItem title="Contact">
              <NavLink to="/contact">
                <i className="fas fa-pencil-alt"></i>
                <span>Contact</span>
              </NavLink>
            </DropListItem>

            <DropListItem title="Credentials">
              <NavLink to="/about">
                <i className="fas fa-question"></i>
                <span>About</span>
              </NavLink>
            </DropListItem>
          </DropList>

          <div className="public-sidebar-quickLinks">
            {
              this.props.params.quicklinks.map((quickLink, index) => 
                <a href={quickLink.link} key={quickLink.title + index} title={quickLink.title} className="public-sidebar-listItem">
                  <i className={quickLink.icon}></i>
                </a>
              )
            }
          </div>
        </div>
      </div>
  }
}

export default PublicSideBar
