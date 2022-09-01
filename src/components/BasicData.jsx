import React from "react";
import { GrMail  } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import '../stylesheets/basicData.scss';

export function BasicData (props) {
  return(
    <div className={`container-data ${props.tema}`} >
      <img 
        src={require("../assets/images/profile.jpeg")}
        alt="Foto perfil" 
      />
      <div className="data-info">
        <div className="info-head">
          <h2 className="head-name">Billy Pearson</h2>
          <p>Front-end developer</p>
          <div className="head-email">
            <span>
              <GrMail />
            </span>
            <p>billy@example.com</p>
          </div>
          <div className="head-phone">
            <span>
              <FaPhoneAlt />
            </span>
            <p>(+603) 546 624 342</p>
          </div>
        </div>
        <div className="info-body">
          <p>
            Self-motivated developer, who is willing to learn and create outstanding UI applications. 
          </p>
          <p>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. 
          </p>
        </div>
      </div>
    </div>
  );
};