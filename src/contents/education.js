import React from 'react';
import education from '../data/education.json';

import Card from './card'

class Education extends React.Component{
  render_title(x){
    var img_include = "";
    if(x.hasOwnProperty('logo')){
      img_include = <div class="logo"><img src={require("../res/"+x.logo)} alt={x.logo} width="auto" height="100%"/></div>
    }
    return (
      <div>
        <span class="card_st_left edu_school"><h2>{x.school}</h2></span>
        <span class="card_st_right">{img_include}</span>
      </div>
    )
  }
  render_subtitle(x){
    return(
      <div class="card_st">
        <h3>
          <span class="card_st_left">{x.program}</span>
          <span class="card_st_right">{x.start_month} {x.start_year} - {x.end_month} {x.end_year}</span>
        </h3>
      </div>
    )
  }
  render_data(x){
    return(
      <div class="card_body">
        <p><i>Relevant Coursework:</i> {x.relevant_coursework}</p>
      </div>
    );
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">Education</h1>
        <ul className="content">
            {education.map(x =>
              <li>
                <Card
                  title = {this.render_title(x)}
                  subtitle = {this.render_subtitle(x)}
                  content = {this.render_data(x)}
                />
              </li>
            )}
        </ul>
      </div>
    );
  }
}

export default Education
