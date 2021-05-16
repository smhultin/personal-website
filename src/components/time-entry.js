import React from 'react';
import '../theme/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Box, Text } from 'rebass';

const TimeEntry = (props) => {

  const { title, location, start, end, description } = props;

  return (
    <div className='time-entry'>
      <div className='time-entry-inner'>
        <div className='time-icon color-4'>
          <FontAwesomeIcon icon={ faHeart } color='white' />
        </div>
        <div className='time-label'>
          <h2>{ title } <span>{ location } | { start } to { end }</span></h2>
          <p>{ description }</p>
        </div>
      </div>
    </div>
  );
}

export default TimeEntry;