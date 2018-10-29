import React, { Component } from 'react';
import '../App.css';
import './nav.css'

//Styling
let navStyle = {
    position: "relative", 
    float: "right",
    zIndex: "99"
}

let listStyle = {
    listStyle: "none",
    textAlign: "center"
}

let listItem = {
    margin: "20px"
}

let linkStyle = {
   fontFamily: "Oswald",
   textDecoration: "none",
   border: "0"      
}

class Nav extends Component {
  
  render() {
    return (
      <nav className="nav" style={{...navStyle}}>
          <ul style={{...listStyle}}>
            <li style={{...listItem}}>
              <button className="link2" style={{...linkStyle, letterSpacing: "5px"}} onClick={this.props.homePage}>home</button>
            </li>
            <li style={{...listItem}}>
              <button className="link" style={{...linkStyle, letterSpacing: "4px"}} onClick={this.props.aboutPage}>about</button>
            </li>
            <li style={{...listItem}}>
              <button className="link2" style={{...linkStyle}} onClick={this.props.portfolioPage}>portfolio</button>
            </li>
            <li style={{...listItem}}>
              <button className="link" style={{...linkStyle, letterSpacing: "1px"}} onClick={this.props.contactPage}>contact</button>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Nav;