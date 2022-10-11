import React from 'react';
import "./Footer.css";
import { FaFacebookF} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='/' className='footer__logo'> DaffyDev </a>
        <ul className='permalink'>
          <li><a href='/'> Home </a></li>
          <li><a href='/'> About </a></li>
          <li><a href='/'> Experience </a></li>
          <li><a href='/'> Portfolio </a></li>
          <li><a href='/'> Services </a></li>
          <li><a href='/'> Testimonials </a></li>
          <li><a href='/'> Contact </a></li>
        </ul>

        <div className='footer__socials'>
          <a href='https://facebook.com'><FaFacebookF/></a>
          <a href='https://twitter.com'><FaTwitter/></a>
          <a href='https://github.com'><FaGithub/></a>
        </div>

        <div className='footer__copyright'>
          <small> &copy; DaffyDev. All right reserved </small>
        </div>
    </footer>
  )
}

export default Footer
