import React from 'react';
import '../theme/App.css';

import cutie from '../resources/photos/yeehaw-snorlax.png';

import { Box, Flex, Image, Text } from 'rebass';

const Home = (props) => {

    return (
      <Flex>
        <Box p={3}>
          <Text className='header' fontSize={125}>sarah<br/>hultin</Text>
        </Box>
        <Box p={3}>
          <Image className='joe' src={cutie} sx={{ height: '250px' }} />
        </Box>
      </Flex>
    );
};

export default Home;