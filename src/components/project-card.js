import React from 'react';
import '../theme/App.css';

import { Box, Card, Image, Heading } from 'rebass';

const ProjectCard = (props) => {

  const { title, leadPhoto } = props;

  return (
    <Card className='gallery-card' width={256}>
      <Image src={ leadPhoto } />
    </Card>
  );
}

export default ProjectCard;