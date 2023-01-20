import React from 'react';
import "./Contact.css";
import {MdOutlineEmail} from 'react-icons/md';
import {FaTwitter} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70cmyhu', 'service_70cmyhu', form.current, 'JyKSyzX1Thf9T8Tfe')

    e.target.reset();
    
  };
  return (
    <section id='Contact'>
      <h5> Get in Touch </h5>
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='cc' />
            <h4> Email </h4>
            <h5> daffydanni@gmail.com </h5>
            <a href='mailto:daffydanni@gmail.com'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaTwitter  className='contact__option-icon'/>
            <h4> Twitter </h4>
            <h5> daffydanni__ </h5>
            <a href='https://twitter.com/daffydanni__' target="_blank"> Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon' />
            <h4> WhatsApp </h4>
            <h5> +123456789 </h5>
            <a href='http://api.whatsapp.com/send?phone+2348037026969' target='_blank'> Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required />
          <input type='email' name='email' placeholder='Email Address' required />
          <textarea name='Message' rows='8' placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
