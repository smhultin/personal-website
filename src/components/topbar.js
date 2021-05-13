import React, { Component } from 'react';
import '../css/App.css';

class TopBar extends Component {

  render() {
    return (
      <div>
        <ul className='topbar'>
          <li className='topbar-item-l'><a href='#'>sarah hultin</a></li>
          <li className='topbar-item-r'><a href='#'>projects</a></li>
          <li className='topbar-item-r'><a href='#'>gallery</a></li>
          <li className='topbar-item-r'><a href='#'>about</a></li>
        </ul>
      </div>
    );
  }
}

export default TopBar;