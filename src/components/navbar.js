import React from 'react';
import '../theme/App.css';

import { Link } from 'react-router-dom';
import { Box, Flex } from 'rebass';

const NavBar = (props) => {

    return (
      <Flex
        padding='30px 0 0 0'
        alignItems='center'>
        <Link className='nav-main' to={{ pathname: '/' }}><b>sarah hultin</b></Link>
        <Box mx='auto' />
        <Link className='nav' to={{ pathname: '/about' }}>about</Link>
        <Link className='nav' to={{ pathname: '/gallery' }}>gallery</Link>
        <Link className='nav' to={{ pathname: '#!'}}>projects</Link>
      </Flex>
    );
}

export default NavBar;