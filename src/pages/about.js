import React from 'react';
import '../theme/App.css';

import TimeEntry from '../components/time-entry';
import { Text } from 'rebass';

const About = (props) =>  {

    return (
      <div>
        <Text className='header' fontSize={75}>about me</Text>
        <Text>description</Text>

        <div>
          <Text className='header' fontSize={50}>timeline</Text>
          <div className='time-container'>
            <TimeEntry
              title='Software Engineer @ Disney'
              location='seattle'
              start='aug 2020'
              end='now'
              description='I code for the big mouse' />
            <TimeEntry
              title='Comp Sci & Math Undergrad @ Colorado State'
              location='fort collins'
              start='aug 2016'
              end='may 2020'
              description='boy howdy did i love school' />
          </div>
        </div>
      </div>
    );
}

export default About;