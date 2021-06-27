import React from 'react';
import '../theme/App.css';

import { Text } from 'rebass';

const Gallery = (props) =>  {

    var galleryJson = require('../resources/gallery.json');

    return (
      <div>
        <Text className='page-header'>gallery</Text>
        <Text>{galleryJson.description}</Text>
      </div>
    );
}

export default Gallery;