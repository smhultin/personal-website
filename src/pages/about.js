import React from 'react';
import '../theme/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import cutie from '../resources/photos/yeehaw-snorlax.png';

import { Box, Flex, Image, Text } from 'rebass';

const About = (props) =>  {

    return (
      <div>
        <Flex>
          <Text className='page-header'>hi i'm sarah!!</Text>
        </Flex>

        <Flex>
          <Box width={[2/3]}>
            <Text>
              i am a technologist based in the seattle area. i grew up
              in northern california always trying to find new ways to
              express my creativity. throughout grade school, this showed
              up through drawing, painting, and sewing. going into my senior
              year of high school, i was certain i wanted to go into the
              fashion industry, but signing up for ap computer science
              would have an effect on my life far beyond what i could have
              imagined.
              <br/><br/>
              i attended colorado state university to pursue my new-found
              passion for computer science. along the way, i picked up a
              second major in mathematics, became president of the acm-w
              student chapter, volunteered to bring stem opportunities to
              local kids, attended a handful of technology and math conferences,
              and met so many kind and inspiring technologists.
              <br/><br/>
              currently, i am a data scientist helping improve digital media
              supply chain workflows at the walt disney company. when i am
              not working, i am designing and sewing clothing for myself.
              <br/><br/>
              feel free to get in touch! :)
            </Text>
          </Box>
        </Flex>
      </div>
    );
}

export default About;