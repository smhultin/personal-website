import React from 'react';
import '../theme/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const TimeEntry = (props) => {

  const { title, location, start, end, description } = props;

  return (
    <div className='time-entry'>
      <div className='time-entry-inner'>
        <div className='time-icon'>
          <FontAwesomeIcon icon={ faHeart }/>
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