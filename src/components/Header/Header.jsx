import React from 'react';
import "./Header.css";
import CTA from "./CTA";
import Me from "../../asset/IM.png";
import HeaderSoc from './HeaderSoc';
import { BsArrowRightSquare } from 'react-icons/bs'

const Header = () => {
  return (
   <header>
    <div className='container header__container'>
      <h5> Hello I'm </h5>
      <h1> Becon Daniel </h1>
      <h5 className='text-light'> Software Developer</h5>
      <CTA />
      <HeaderSoc />

      <div className='me'>
        <img src={Me} alt=''/>
      </div>

      <a href='#Contact' className='scroll__down'>
        <BsArrowRightSquare />
      </a> 

    </div>
   </header>
  )
}

export default Header
