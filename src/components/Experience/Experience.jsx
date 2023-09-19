import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="Experience">
      <h5> Skills I posses </h5>
      <h2> My Experience </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> HTML </h4>
                <small className="text-light"> Experinced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> CSS </h4>
                <small className="text-light"> Experinced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> JavaScript </h4>
                <small className="text-light"> Experinced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> Bootstrap </h4>
                <small className="text-light"> Experinced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> Tailwind CSS </h4>
                <small className="text-light"> Experinced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> ReactJs </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> NextJs </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> TypeScripte </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
          </div>
        </div>
        {/* frontend end */}
        <div className="experience__backend">
          <h3> Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> NodeJS </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> ExpressJS </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> SQL </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> MongoDB </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> MySQL </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4> Python </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
