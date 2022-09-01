import React from "react";
import '../stylesheets/blogs.scss';

export function Blogs(props) {

  let container1 = 
    <>
      <h3>Blog</h3>
      <div className="blogs-head">
        <h2>How to organize your CSS</h2>
        <img 
          src={require("../assets/images/blog.webp")}
          alt="Foto blog" 
        />
      </div>
      <p>
        In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  
      </p>
      <p>
        Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
      </p>
      <a href="#">dev.to</a>
    </>

  let container2 =
  <>
    <div className="blogs-index">
      <h2>Blogs (1)</h2>
    </div>
    <div className="blogs-body">
      <div className={`blogs-head`}>
        <h3>Blog</h3>
        <h2>How to organize your CSS</h2>
        <p>
          In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  
        </p>
        <p>
          Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
        </p>
        <a href="#">dev.to</a>
      </div>
      <img 
        src={require("../assets/images/blog.webp")}
        alt="Foto blog" 
      />
    </div>
  </>

  return(
  <section className={`container-blogs ${props.tema}`} >
      {props.tema==='example1' ? container1 : container2}
    </section>
  );
}