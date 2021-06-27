import React from 'react';
import '../theme/App.css';

import TimeEntry from '../components/time-entry';
import { Text } from 'rebass';

const About = (props) =>  {

    var aboutJson = require('../resources/about.json');

    let timeline = [];
    aboutJson.timeline.forEach((entry, index) => {
      timeline.push(
        <TimeEntry
          title={entry.title}
          location={entry.location}
          start={entry.start}
          end={entry.end}
          description={entry.description} />);
    });

    return (
      <div>
        <Text className='page-header'>about me</Text>
        <Text>{aboutJson.description}</Text>

        <div>
          <Text className='page-header'>timeline</Text>
          <div className='time-container'>
            {timeline}
          </div>
        </div>
      </div>
    );
}

export default About;