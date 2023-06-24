import React from 'react';
import education from '../data/education.json';

import Card from './card'

class Education extends React.Component{
  render_data(x){
    return(
      <div class="card_body">
        <p><i>Relevant Coursework:</i> {x.relevant_coursework}</p>
      </div>
    );
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
  render(){
    return(
      <div className="section">
        <h1 className="title">Education</h1>
        <ul className="content">
            {education.map(x =>
              <li>
                <Card
                  title = {<div><h2 className="edu_school">{x.school}</h2></div>}
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
