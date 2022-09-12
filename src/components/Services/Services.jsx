import React from 'react';
import "./Services.css";
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='Services'>
      <h5> What I Offer</h5>
      <h2> Services </h2>

      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3> UI/UX Design </h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Figma implimentation, bring designs to live. </p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Having a team of designers just for you. </p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Always ready to do your designs for you. </p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Every day is an avenue to bring designs to live. </p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> creation at its best. </p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Your choice our desire! </p>
            </li>
          </ul>
        </article>
        {/* UI/UX end */}
        {/* Web Development begins */}
        <article className='service'>
          <div className='service__head'>
            <h3> Web Development </h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> creating and maintaining designs. </p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> HTML, CSS, JAVASCRIPT, REACT are the tools we use.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> We aim to deliver the best.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Always at your service to deliver.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> The love for the web and what it can create is what we aim to achieve.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> I Love to Work in a team if you would have me.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Having love what I do, Hopefully you will see it fit to want to work with me.</p>
            </li>
          </ul>
        </article>
        {/* Web development Ends */}
        {/* Content creation begins */}
        <article className='service'>
          <div className='service__head'>
            <h3> Content creation </h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Words can't be over emphasize.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Writing is an art.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> We don't just write, we create memories.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Just one article can change how you think.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Content Creation with a difference!</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p> Your mind, We create! </p>
            </li>
          </ul>
        </article>
        {/* End of Content creation */}
      </div>
    </section>
  )
}

export default Services
