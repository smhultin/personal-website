import React from 'react';
import '../theme/App.css';

import { Box, Text } from 'rebass';

const TimeEntry = (props) => {

  const { title, location, start, end, description } = props;

  return (
    <div className='time-entry'>
      <div className='time-entry-inner'>
        <div className='time-icon color-2'>
          <i className='heart' />
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