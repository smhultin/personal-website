import React from 'react';
import '../theme/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Text } from 'rebass';

const About = (props) =>  {

    var aboutJson = require('../resources/about.json');

    return (
      <div>
        <Text className='page-header'>about me</Text>
        <Text>{aboutJson.description}</Text>
      </div>
    );
}

export default About;