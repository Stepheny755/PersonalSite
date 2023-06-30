import React from 'react'
import experiences from '../data/experience.json'

import Card from './card'

class Experience extends React.Component{
  render_title(x){
    var img_include = "";
    if(x.hasOwnProperty('logo')){
      img_include = <div class="logo"><img src={require("../res/"+x.logo)} alt={x.logo} width="auto" height="100%"/></div>
    }
    return (
      <div>
        <span class="card_st_left"><h2>{x.title} - {x.name}</h2></span>
        <span class="card_st_right">{img_include}</span>
      </div>
    )
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
  render_content(x){
    return(
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
        <h1 className="title">Experience</h1>
        <ul className="content">
          {experiences.map(x =>
            <li>
              <Card
                title = {this.render_title(x)}
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
