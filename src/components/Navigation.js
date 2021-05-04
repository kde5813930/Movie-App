import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){  
  return(
    <div className="btn__container">
      <div className="btn__wrap">
        <Link className="home__btn" to="/">Home</Link>
        <Link className="about__btn" to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navigation;