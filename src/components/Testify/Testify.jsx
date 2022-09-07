import React from 'react';
import "./Testify.css";
import AV1 from '../../asset/Avatar 1.jpg';
import AV2 from '../../asset/Avatar 2.jpg';
import AV3 from '../../asset/Avatar 3.jpg';
import AV4 from '../../asset/Avatar 4.jpg';

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AV1,
    name: "BonitasICT",
    reveiw: "Briefly but regularly reviewing how you work will help you to promote clearer thinking in the work itself. Daniel is detailed oriented and has good work ethics."
  },

  {
  avatar: AV2,
  name: "Schiefersten Morgun",
  reveiw: "I don't believe that man was born to work for a living; I believe he was born to make what he lives for HIS WORK. Daniel's work speaks for him...you won't regret working with him"
  }, 

  {
    avatar: AV3,
    name: "Hemphrey Berenice",
    reveiw: ". . . there is an exciting world of possibilities out there that very few of us get the chance to explore during our working lives, but retirement is that time!"
  },

  {
  avatar: AV4,
  name: "Emsley Roseanna",
  reveiw: "Laughter in the workplace leads to employees who are genuinely happy to go to work every day. Talking to Daniel each day brings it's own form of development.Test and see!"
  }
]

const Testify = () => {
  return (
    <section id='Testify'>
      <h5> Review from client </h5>
      <h2> Testimonials </h2>
      <Swiper className='container testify__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, reveiw}, index) =>{
            return (
              <SwiperSlide key={index} className='testify'>
                <div className='client__avatar'>
                  <img src={avatar} alt='Image1'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{reveiw}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testify
