import React, { Component } from 'react';
import Stars from './components/stars';
import Grid from './components/grid';
import Nav from './components/nav';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
          page: "home"
        }    
    }

    handleHomePage = () => {this.setState({page: "home"})};
    handleAboutPage = () => {this.setState({page: "about"})};
    handlePortfolioPage = () => {this.setState({page: "portfolio"})};
    handleContactPage = () => {this.setState({page: "contact"})};

  render() {
    let currentPage;

    if (this.state.page === "home") {
      currentPage = <Grid />
    } else if (this.state.page === "about") {
      currentPage = <About />
    } else if (this.state.page === "portfolio") {
      currentPage = <Portfolio />
    } else if (this.state.page === "contact") {
      currentPage = <Contact />
    }

    return (
      <div className="appstyle" >
        <Stars />
        {currentPage}        
        <Nav homePage = {this.handleHomePage}
             aboutPage = {this.handleAboutPage}
             portfolioPage = {this.handlePortfolioPage}
             contactPage = {this.handlePortfolioPage}/>
      </div>
    );
  }
}

export default App;
