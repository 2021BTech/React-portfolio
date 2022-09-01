import React from 'react'
import CV from "../../asset/CV.pdf";

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'> Download CV </a>
      <a href="#Contact" className='btn-primary'> Let's Talk </a>
    </div>
  )
}

export default CTA
