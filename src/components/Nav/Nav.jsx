import React from 'react';
import "./Nav.css";
import { ImHome3 } from 'react-icons/im';
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { MdMessage } from 'react-icons/md'
import { BsFillPencilFill } from 'react-icons/bs'
import { useState  } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
      <nav>
        <a href="#" className={activeNav === '#' ? 'active': ''}> <ImHome3/> </a>
        <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active': ''}> <AiOutlineUser/> </a>
        <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active': ''}> <BiBook/> </a>
        <a href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active': ''}> <RiServiceLine/> </a>
        <a href="#Contact"onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active': ''}> <MdMessage/> </a>
        <a href="#Blog"onClick={() => setActiveNav('#Contact')} className={activeNav === '#Blog' ? 'active': ''}> <BsFillPencilFill/> </a>
      </nav>
    </div>
  )
}

export default Nav
