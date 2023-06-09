import React from 'react';
import "./About.css";
import ME from '../../asset/me.png'
import {FaAward } from 'react-icons/fa'
import {FiUsers } from 'react-icons/fi'
import {TbFolders} from 'react-icons/tb'
const About = () => {
  return (
    <section id='About'>
      <h5> Get to Know </h5>
      <h2> About Me </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About-Me" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5> Experience </h5>
              <small> 3+ Years Working </small>
            </article>

            <article className='about__card'>
              <FiUsers  className='about__icon'/>
              <h5> Clients </h5>
              <small> 50+ Clients </small>
            </article>

            <article className='about__card'>
              <TbFolders  className='about__icon'/>
              <h5> Projects </h5>
              <small> 10+ Completed </small>
            </article>
          </div>

          <p>
          Experienced software Developer with a demonstrated history of working in the information technology and services industry. 
          Skilled in Communication, Customer Relationship Management (CRM), Management, Microsoft Excel, and Engineering. Strong engineering professional with a Bachelor of Engineering-BE focused in metallurgical/material engineering from Nnamdi Azikiwe University.
          </p>

          <a href='#Contact' className='btn btn-primary'> Let's Talk </a>
        </div>

      </div>
    </section>
  )
}

export default About
