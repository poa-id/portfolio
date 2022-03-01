import React from 'react'
import {BsTwitter, BsInstagram , BsLinkedin} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://twitter.com/poa_93" target="_blank">
            <BsTwitter />
        </a>
        <a href="https://www.instagram.com/poa93/" target="_blank"> 
            <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/pedro-ossorio-arana-879602104/" target="_blank">
            <BsLinkedin />
        </a>
    </div>
  )
}

export default SocialMedia