import React from 'react';
import '../theme/App.css';

import { Flex, Text } from 'rebass';

const Footer = (props) => {

    return (
      <Flex
        padding='30px 0 0 0'
        alignItems='center'>
        <Text
          className='footer'
          padding='12px'>
          made with love by sarah
        </Text>
      </Flex>
    );
}

export default Footer;