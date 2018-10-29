import React, { Component } from 'react'
import './grid.css';

let font = {
    fontFamily: "Oswald",
    margin: "5px",
    paddingTop: "10px",
    color: "#7e99a0"
}

class Grid extends Component {
  render() {
   
    return (
      <div className="grid">   
        <div style={{gridColumn: "2", gridRow: "2/ 6"}}>
            <div className="shape1"></div>
        </div>
        <div style={{gridColumn: "3 /span 3", gridRow: "2/ 3"}}>
            <div className="shape2"></div>
        </div>
        <div style={{gridColumn: "3 /span 2", gridRow: "3/ 5"}}>
            <div className="shape3"></div>
        </div>
        <div style={{gridColumn: "5", gridRow: "3/ 6"}}>
            <div className="shape4"></div>
        </div>
        <div style={{gridColumn: "3/ span 2", gridRow: "5/ 6"}}>
            <div className="shape5"></div>
        </div>    
        <div style={{gridColumn: "2 /span 4"}}>
            <h1 className="name" style={{...font,
                        color: "#cb2029",
                        marginBottom: "5px",
                        marginTop: "15px",
                        paddingTop: "0px",
                        fontWeight: "200"                        
                        }}>
                KA
                <span style={{fontWeight: "300"}}>T</span>
                <span style={{fontWeight: "400"}}>E</span>
                <span style={{fontWeight: "500"}}>MO</span>
                <span style={{fontWeight: "400"}}>R</span>
                <span style={{fontWeight: "300"}}>T</span>
                ON                      
            </h1>
        </div> 
        <div style={{gridRow: "1/ 7"}}>
            <h2 className="title" style={{...font, 
                        fontWeight: "500",                       
                        writingMode: "vertical-rl",
                        textAlign: "left",
                        color: "#3f5779",
                        paddingTop: "30px"}}>WEB DEVELOPER</h2>
        </div>        
        <div style={{gridColumn: "2/ span 4",
                     gridRow: "6"}}>
            <h4 className="skills" style={{...font}}>HTML | CSS | BOOTSTRAP | REACT | ES6 | GIT</h4>
        </div>                
      </div>
    );
  }
}

export default Grid;