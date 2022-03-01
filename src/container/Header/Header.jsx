import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';


const Header = () => {
  return(
  <div className="app__header app__flex">
    <div className='app__header-typewriter'>
      <p className='app__header-hero1'>Hi there!</p><p className='app__header-hero2'>This is my portfolio.</p>
    </div>
      
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
  </div>
  )
}

export default AppWrap(Header, 'home');