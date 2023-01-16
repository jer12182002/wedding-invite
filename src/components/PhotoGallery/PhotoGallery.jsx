import React, { useState } from 'react';
import inTrees from '../../vendor/secondPage/inTrees.jpg';
import withWinnie from '../../vendor/secondPage/withWinnie.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './PhotoGallery.scss';

const PhotoGallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className='photoGallery'
      activeIndex={index}
      onSelect={handleSelect}>
      <Carousel.Item>
        <img className='d-block' src={inTrees} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block' src={withWinnie} alt='Second slide' />
      </Carousel.Item>
    </Carousel>
  );
};

export default PhotoGallery;
