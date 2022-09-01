import { type } from '@testing-library/user-event/dist/type';
import React, { Fragment, useState } from 'react'
import { Skill } from './Skill'

export function Skills(props) {

  const [typeSkills, setTypeSkills] = useState([  
    {
      PCid: 1,
      PCname: 'Front End',
      PCskills: [
        {
          id: 1,
          name: 'react',
          progress: 60
        },
    
        {
            id: 2,
            name: 'javascript',
            progress: 80
        },
      
        {
            id: 3,
            name: 'css',
            progress: 90
        },
      
        {
            id: 4,
            name: 'vue',
            progress: 60
        },
      
        {
            id: 5,
            name: 'redux',
            progress: 80
        },
      
        {
            id: 6,
            name: 'react-native',
            progress: 90
        }
      ]
    },
    {
      PCid: 2,
      PCname: 'Design',
      PCskills: [
        {
          id: 1,
          name: 'Figma',
          progress: 60
        },
        {
          id: 2,
          name: 'Photoshop',
          progress: 90
        }
      ]
    }
  ])

  return (
    <div className={`type-skill ${props.tema}`}>
      {
        typeSkills.map((types) => {
          return(
            <section key={types.PCid} className="container-skills">
              <h2> { types.PCname } </h2>
              {
                types.PCskills.map((skil)=> {
                  return(
                    <Skill 
                      key={skil.id} 
                      nameSkill={skil.name}
                      progress={skil.progress}
                    />
                  );
                })
              }
            </section>
          );                 
        })
      }
    </div>
  )
}
