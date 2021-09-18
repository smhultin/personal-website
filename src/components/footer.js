import React from 'react';
import '../theme/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Flex, Text } from 'rebass';

const Footer = (props) => {

    return (
      <Flex
        padding='30px 0 0 0'
        alignItems='center'>
        <Text className='footer' padding='12px'>
          made with <FontAwesomeIcon icon={ faHeart } /> by sarah
        </Text>
      </Flex>
    );
}

export default Footer;