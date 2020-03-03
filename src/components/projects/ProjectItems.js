import React, { Component } from 'react';

class Projects extends Component {
  render(){
    return(
      <div className="project-item">
        {this.props.project.title} - {this.props.project.category}
      </div>
    );
  }
}
export default Projects;
