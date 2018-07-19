# ZenApps.org
  
**Description**:  ZenApps is a React.js website to showcase my personal projects

**Version**:      [1.2.1](#v121)  
**Author**:       Elijah Liedtke (Chimera.Zen)  
**Link**:         https://github.com/ChimeraZen/ZenApps

**Copyright**:    Copyright (c) 2018, Elijah Liedtke  
**License**:      http://www.gnu.org/licenses/old-licenses/gpl-2.0.html  

**NPM Packages**:
* create-react-app
* react-router-dom
* firebase
* swipeable-react-views
* @material-ui/core
* @material-ui/icons


## Future Improvements
* Add option to display source code on programs
* Add page for non-program examples, such as:
  * Change logs
  * Code samples
* Continue to improve the UI and UX
* Increase mobile-friendliness


---

## ChangeLog
### v1.3.0
* Removed theme meta tag from index.html
* FrontPages component
  * Added withRouter higher component 
  * Added componentDidUpdate
    * Added logic to hide menu on location change
  

### v1.2.1
* FrontPages component
  * Corrected issue with incorrect element used for fullscreen request resulting in menu not showing
  * Cleaned up conditional statements in handleFullscreen()
  

### v1.2.0
* FrontPages component
  * Set title width to 250px
  * Added name and position to title
  * Fullscreen mode
    * Added icons for enabling/disabling fullscreen on mobile devices
    * Added handleFullscreen function
  * Removed body style modification from v1.1.4
* SideBar component
  * Removed name
  * Hid import of GestureIcon until Guides is activated
  * Removed Typography from @material-ui import
* README file
  * Added Future Improvements
  * Minor visual improvements


### v1.1.4
* Added "apple-mobile-web-app-capable" meta to index.html
* Modified body height to calc(100% + 1px) to allow user to hide/show toolbar by scrolling
* Updated manifest.json short_name and name
* Added meta to line in README ChangeLog v1.1.3


### v1.1.3
* Added "mobile-web-app-capable" meta to index.html


### v1.1.2
* Removed console.log from Grid-List View
* Added styles to force mobile devices to hide their respective browser toolbars
* Setup Guides component and created links to /guides
* FrontPages
  * Added name and title to AppBar


### v1.1.1
* Reordered README ChangeLog
* Credentials Component
  * Replaced missing style for row class
* FrontPage Component
  * Reduced featured image's max-height when viewport is below 600px width


### v1.1.0
* Added viewport breakpoints
* Improved responsive design
* Replaced ? with && in this.state !== null
* Reduced calls and improved performance


### v1.0.1
* Created routing system
* Created Firebase connection
* Created components:
  * About
  * AllPrograms
  * Credentials
  * FeaturedQuote
  * ZenStepper
* Updated FrontPage
* Created pages for:
  * About
  * Credentials
  * AllPrograms
* Added programs to Programs component
  * Data Tree
  * Grid-List View
  * Vigenere Cipher


### v0.0.2
* Updated config
* Updated .gitignore


### v0.0.1
* Setup initial app layout and menu structure
* Added routing system
* Created SideBarContact to showcase profile image and quick external links
* Created SideBarMenu as the primary navigation
