import React, { useState } from "react";
import { Project } from "./Project";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import '../stylesheets/projects.scss';

export function Projects(props) {

  const[projects, setProjects] = useState([
    {
      id: 1,
      img: 'repiceblog',
      title: 'Recipe Blog',
      text: 'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io'
    },
    {
      id: 2,
      img: 'mygallery',
      title: 'My Gallery',
      text: 'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io'
    },
    {
      id: 3,
      img: 'checkout',
      title: 'Checkout',
      text: 'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io'
    }
  ]);

  return (
    <section className={`container-projects ${props.tema}`}>
      <div className="projects-index">
        <h2>Projects (3)</h2>
        <div className="index-button">
          <button>React</button>
          <button>Vue</button>
          <button className="button-active">Responsive</button>
        </div>
      </div>
      <div className="projects-body">
        {
          projects.map((project) => {
            return(
              <Project 
                key={project.id}
                img={project.img}
                title={project.title}
                text={project.text}
              />
            );
          })
        }
      </div>

      <div className="projects-pages">
        <a className="faAngleLeft" href="#">
          <span>
            <BsChevronLeft />
          </span>
        </a>
        <a href="#">1</a>
        <a className="active" href="#">2</a>
        <a href="#">3</a>
        <p> . . . </p>
        <a href="#">10</a>
        <a className="faAngleRight" href="#">
          <span>
            <BsChevronRight />
          </span>
        </a>
      </div>
    </section>
  );
}