import React from 'react';
import "./Portfolio.css";
import IMG1 from "../../asset/portfolio 1.jpg"
import IMG2 from "../../asset/portfolio 2.png"
import IMG3 from "../../asset/portfolio 3.jpg"
import IMG4 from "../../asset/portfolio 4.png"
import IMG5 from "../../asset/portfolio 51.png"
import IMG6 from "../../asset/portfolio 61.png"

const data = [
    {
        id:1,
        image:IMG1,
        title:"OminiFoods",
        github:"https://github.com/2021BTech?tab=overview&from=2022-09-01&to=2022-09-02",
        demo:"https://github.com/2021BTeominFoodsch/"
    },
  {
    id:2,
    image:IMG2,
    title:"Portfolio- with React jS",
    github:"https://github.com/2021BTech?tab=overview&from=2022-09-01&to=2022-09-02",
    demo:"https://github.com/2021BTeominFoodsch/"
  },
  {
    id:3,
    image:IMG3,
    title:"Crunchy Movies with React",
    github:"https://github.com/2021BTech?tab=overview&from=2022-09-01&to=2022-09-02",
    demo:"https://github.com/2021BTeominFoodsch/"
  },
  {
    id:4,
    image:IMG4,
    title:"Chat-bot with React/Socket.io",
    github:"https://github.com/2021BTech?tab=overview&from=2022-09-01&to=2022-09-02",
    demo:"https://github.com/2021BTeominFoodsch/"
  },
  {
    id:5,
    image:IMG5,
    title:"Rest countries API",
    github:"https://github.com/2021BTech?tab=overview&from=2022-09-01&to=2022-09-02",
    demo:"https://github.com/2021BTeominFoodsch/"
  },
  {
    id:6,
    image:IMG6,
    title:"GVE DEMO-Property App",
    github:"https://github.com/2021BTech?tab=overview&from=2022-09-01&to=2022-09-02",
    demo:"https://github.com/2021BTeominFoodsch/"
  }
]

const Portfolio = () => {
  return (
    <section id='Portfolio'>
        <h5> My Recent Work </h5>
        <h2> Portfolio </h2>

        <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                  </div>
                    <h3> {title} </h3>
                    <div className='portfolio__item-cta'>
                      <a href={github} className='btn'> GITHUB </a>
                      <a href={demo} className='btn btn-primary' target="_blank"> Live Demo</a>
                    </div>
                </article>
              )
            })
          }
        </div>
    </section>
   )
}

export default Portfolio
