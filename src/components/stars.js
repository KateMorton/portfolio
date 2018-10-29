import React, { Component } from 'react';
import './stars.css';



class Stars extends Component {
  render() {
    return (
        <div style={{zIndex: "55"}}> 
            <div className="stars"></div>
            <div className="stars2" style={{position: "absolute", top: "0", left: "0"}}></div>
            <div className="stars3" style={{position: "absolute", top: "0", left: "0"}}></div>
            <div className="dots"></div>
            <div className="dots2" style={{position: "absolute", top: "0", left: "0"}}></div>
            <div className="dots3" style={{position: "absolute", top: "0", left: "0"}}></div>      
            <div className="spots"></div>
            <div className="spots2" style={{position: "absolute", top: "0", left: "0"}}></div>
            <div className="spots3" style={{position: "absolute", top: "0", left: "0"}}></div>      
        </div>     
    );
  }
}

export default Stars;