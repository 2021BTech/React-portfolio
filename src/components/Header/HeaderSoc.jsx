import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs'

const HeaderSoc = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/daniel-becon-7b1a49aa/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/2021BTech" target="_blank">
        <BsGithub/>
      </a>
      <a href="https://twitter.com/home" target="_blank">
        <BsTwitter/>
      </a>
    </div>
  )
}

export default HeaderSoc
