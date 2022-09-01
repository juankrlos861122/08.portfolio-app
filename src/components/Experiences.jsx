import React, { useState } from "react";
import { Experience } from "./Experience";
import '../stylesheets/experiences.scss';

export function Experiences(props) {

  const[experiences, setExperiences] = useState([
    {
      id: 1,
      img:'Adidas_Logo',
      date:'Feb 2017 - Current',
      charge:'Front-end developer',
      text:'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    },
    {
      id: 2,
      img:'H&M_Logo',
      date:'Aug 2016 - Feb 2018',
      charge:'Full-stack developer',
      text:'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    },
    {
      id: 3,
      img:'nivea_Logo',
      date:'Jun 2015 - Aug 2016',
      charge:'Jun 2015 - Aug 2016',
      text:'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    }
  ]);

  return (
    <section className={`container-experience ${props.tema}`}>
      <h2>Experiences</h2>
      {
        experiences.map((iterator) => {
          return(
            <Experience
              key={iterator.id}
              img={iterator.img}
              date={iterator.date}
              charge={iterator.charge}
              text={iterator.text}
            />
          );
        })
      }
    </section>
  );
}