import React, { useState } from "react";
import { Hobby } from "./Hobby";
import '../stylesheets/hobbies.scss';

export function Hobbies() {

  const [hobbies, setHobbies] = useState([
    {
      id: 1,
      img:'hobbies_game',
      name:'Gaming',
      text:'Quisque feugiat malesuada molestie.'
    },
    {
      id: 2,
      img:'hobbies_cook',
      name:'Cooking',
      text:'Quisque feugiat malesuada molestie.'
    },
    {
      id: 3,
      img:'hobbies_bike',
      name:'Biking',
      text:'Quisque feugiat malesuada molestie.'
    }
  ]);

  return(
    <section className="container-hobbies">
      <h2>Hobbies</h2>
      {
        hobbies.map((hobby) => {
          return(
            <Hobby 
              key={hobby.id}
              img={hobby.img}
              name={hobby.name}
              text={hobby.text}
            />
          );
        })
      }
    </section>
  );
}