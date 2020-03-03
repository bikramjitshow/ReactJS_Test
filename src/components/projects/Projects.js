import React, { Component } from 'react';
import Projectitems from "./ProjectItems";

class Projects extends Component {
  render(){
    let projectitems;
    if(this.props.projects){
      projectitems = this.props.projects.map( project => {
        console.log(project);
        return(
          <Projectitems key={project.title} project={project}></Projectitems>
        )
      });
    }
    return(
      <div className="projects">
        {projectitems}
      </div>
    );
  }
}
export default Projects;
