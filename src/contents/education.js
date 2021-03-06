import React from 'react';
import education from '../data/education.json';

import Card from './card'

class Education extends React.Component{
  render_data(x){
    return(
    <div>
      <h4 className="edu_range">{x.start_month} {x.start_year} - {x.end_month} {x.end_year}</h4>
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
                  title = {<div><h3 className="edu_school">{x.school}</h3><h4 className="edu_program">{x.program}</h4></div>}
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
