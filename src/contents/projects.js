import React from 'react'

import projects from '../data/projects.json'

import Card from './card'

class Projects extends React.Component{
  render_data(x){
    return (
      <div class="card_body">
        <li key={x.id}>
          <p>{x.description}</p>
        </li>
      </div>
    );
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">Projects</h1>
        <ul className="content">
          {projects.map(x =>
            <li>
              <Card
                title = {<h2>{x.name} - {x.headline} </h2>}
                content = {this.render_data(x)}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}
export default Projects
