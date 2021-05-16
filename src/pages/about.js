import React from 'react';
import '../theme/App.css';

import TimeEntry from '../components/time-entry';
import { Text } from 'rebass';

const About = (props) =>  {

    return (
      <div>
        <Text className='page-header'>about me</Text>
        <Text>description</Text>

        <div>
          <Text className='page-header'>timeline</Text>
          <div className='time-container'>
            <TimeEntry
              title='Software Engineer at Disney'
              location='seattle'
              start='aug 2020'
              end='now'
              description='I code for the big mouse' />
            <TimeEntry
              title='Undergrad at Colorado State University'
              location='fort collins'
              start='aug 2016'
              end='may 2020'
              description='boy howdy did i love school' />
            <TimeEntry
              title='Intern at Northrop Grumman'
              location='aurora & boulder'
              start='may 2018'
              end='aug 2019'
              description='4 hour drives sucked' />
            <TimeEntry
              title='High School'
              location='folsom'
              start='aug 2012'
              end='may 2016'
              description='code?? dont know her' />
          </div>
        </div>
      </div>
    );
}

export default About;