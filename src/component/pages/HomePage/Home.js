import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import Carousel from '../../../component/Carousel'

function Home() {
  return (
    <>
      <Carousel/>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;