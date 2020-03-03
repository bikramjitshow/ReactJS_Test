import React, { Component } from 'react';
import './App.css';
import Persons from './components/persons/Persons';
import Projects from './components/projects/Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "business Website",
          category: "Web Design"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        },
        {
          title: "E-comerce Website",
          category: "Web Developmemt"
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <h1>React APP</h1>
        <div className="cards">
          <Persons name="Bikram" age="23" />
          <Persons name="Rukmini" age="22" />
        </div>
        <div className="cards">
          <Projects projects={this.state.projects}></Projects>
        </div>
      </div>
    );
  }
}

export default App;
