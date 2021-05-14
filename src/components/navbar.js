import React from 'react';
import '../theme/App.css';

import { Box, Flex, Link } from 'rebass';

const NavBar = (props) => {

    return (
      <Flex
        padding='30px 0 0 0'
        alignItems='center'>
        <Link className='nav'>sarah hultin</Link>
        <Box mx='auto' />
        <Link className='nav' padding='0 30px 0 0' href='www.google.com'>about</Link>
        <Link className='nav' padding='0 30px 0 0' href='#!'>gallery</Link>
        <Link className='nav' href='#!'>projects</Link>
      </Flex>
    );
}

export default NavBar;