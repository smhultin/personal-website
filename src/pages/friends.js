import React from 'react';
import '../theme/App.css';

import { Card, Flex, Image, Text } from 'rebass';

import snorlax from '../resources/photos/yeehaw-snorlax.png';

const Friends = (props) =>  {
    return (
      <div>
        <Text className='page-header'>these are my friends</Text>
        <Image src={ snorlax } />
      </div>
    );
}

export default Friends;