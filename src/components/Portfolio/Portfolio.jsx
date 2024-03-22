import React from "react";
import "./Portfolio.css";
import IMG1 from "../../asset/portfolio 1.png";
import IMG2 from "../../asset/portfolio 2.png";
import IMG3 from "../../asset/portfolio 3.png";
import IMG4 from "../../asset/portfolio 4.png";
import IMG5 from "../../asset/portfolio 5.png";
import IMG6 from "../../asset/portfolio 6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Task App",
    github: "https://github.com/2021BTech/task__app",
    demo: "https://taskapp-ochre.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Sushi Restaurant Landing Page",
    github: "https://github.com/2021BTech/sushiman-landingpage",
    demo: "https://sushiman-landingpage.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Hacker News",
    github: "https://github.com/2021BTech/Hacker_News",
    demo: "https://hacker-news-six-pied.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Food Store App",
    github: "https://github.com/2021BTech/Store_page",
    demo: "https://store-page-chi.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Quiz App",
    github: "https://github.com/2021BTech/Quiz-App",
    demo: "https://quiz-app-zeta-ten.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Weather App",
    github: "https://github.com/2021BTech/my-weather-app",
    demo: "https://my-weather-app-two-chi.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5> My Recent Work </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  {" "}
                  GITHUB{" "}
                </a>
                <a href={demo} className="btn btn-primary" target="/">
                  {" "}
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
