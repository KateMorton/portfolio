import React, { Component } from 'react';
import './about.css';
import Image from './images/me.png';

class About extends Component {
  

  render() {
    return (
      <div id="about">
        <h1 style={{color: "#cb2029"}}>About</h1>
        <img src={Image} alt="A photograph of me" class="curve"/>
        <p>I have just completed a Bachelors Degree in front end web development which is a projects based 
          qualification with the vast majority of  projects involving building a website, game or app from scratch 
          from requirements outlined in a project brief. The result of this qualification means I am proficient in HTML, 
          CSS and JavaScript, along with knowledge of other technologies such as WordPress, React,
          Bootstrap, jQuery and GIT, plus the ability to pick up new technologies quickly.</p>

          <p>I have thoroughly enjoyed working with all the technologies I gained experience of during my Bachelors Degree
             very keen to keep pushing myself to learn new technologies and gain deeper knowledge and experience of the wide
             variety technology available.</p>
      </div>
    );
  }
}

export default About;