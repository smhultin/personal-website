import React from 'react';
import '../theme/App.css';

import imagePlaceHolder from '../resources/photos/404.jpg';

import GalleryCard from '../components/gallery-card';
import { Text } from 'rebass';

const Gallery = (props) =>  {

    var galleryJson = require('../resources/gallery.json');

    return (
      <div>
        <Text className='page-header'>gallery</Text>
        <Text>{galleryJson.description}</Text>

        <GalleryCard title='test' leadPhoto={imagePlaceHolder} />
      </div>
    );
}

export default Gallery;