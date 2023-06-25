import React from 'react'
import experiences from '../data/experience.json'

import Card from './card'

class Experience extends React.Component{
  render_content(x){
    return(
      <div class="card_body">
        <li key={x.id}>
          <p>{x.description}</p>
        </li>
      </div>
    );
  }
  render_subtitle(x){
    return(
      <div class="card_st">
        <h3>
            <span class="card_st_left">{x.team}</span>
            <span class="card_st_right">{x.start_month} {x.start_year} - {x.end_month} {x.end_year}</span>
          </h3>
      </div>
    )
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">Experience</h1>
        <ul className="content">
          {experiences.map(x =>
            <li>
              <Card
                title = {<h2>{x.title} - {x.name}</h2>}
                subtitle = {this.render_subtitle(x)}
                content = {this.render_content(x)}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Experience
