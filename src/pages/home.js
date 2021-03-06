import React from 'react';
import '../theme/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Box, Flex, Image, Text } from 'rebass';

const Home = (props) => {

    return (
      <div>
        <Flex> <Text className='home-name'>sarah<br/>hultin</Text> </Flex>
        <Flex>
          <Box width={[2/3]}>
           <Text className='home-description'>
             is a cute seattle-based technologist who loves finding ways to incorporate creativity
             and pink into problem-solving
           </Text>
          </Box>
        </Flex>

        <a href='https://www.instagram.com/pink.lemon.aide'>
          <FontAwesomeIcon className='contact-icon' icon={ faInstagram }/>
        </a>
        <a href='https://www.linkedin.com/in/sarah-hultin-478a02160/'>
          <FontAwesomeIcon className='contact-icon' icon={ faLinkedin }/>
        </a>
        <a href='https://www.github.com/smhultin'>
          <FontAwesomeIcon className='contact-icon' icon={ faGithub }/>
        </a>
        <a href='mailto: smhultin@gmail.com'>
          <FontAwesomeIcon className='contact-icon' icon={ faEnvelope }/>
        </a>

      </div>
    );
};

export default Home;