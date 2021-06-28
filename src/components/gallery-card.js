import React from 'react';
import '../theme/App.css';

import { Box, Card, Image, Heading } from 'rebass';

const GalleryCard = (props) => {

  const { title, leadPhoto } = props;

  return (
    <Card className='gallery-card' width={256}>
      <Image src={ leadPhoto } />
      <Heading>{ title }</Heading>
    </Card>
  );
}

export default GalleryCard;