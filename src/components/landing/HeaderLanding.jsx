import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landing/header.css";

export default function HeaderLanding() {
  return (
    <header>
      <div className="landing__logo">
        <img src="/img/partiaf_logo_standar.svg" alt="" />
      </div>
      <nav>
        <Link to="/home">INICIO</Link>
        <Link to="/home">NOSOTROS</Link>
        <Link to="/home">CONTACTO</Link>
      </nav>

      <div className="header__text">
        <div>
          <p className="text_one">
            CONCIERTOS{" "}
            <span className="text_yellow_one text_one">EXLUSIVOS</span>{" "}
          </p>
          <p className="text_two">RUMBA, RAVE O PARTIES</p>
          <span className="text_yellow_two">TU DECIDES!</span>
        </div>

        <div className="text_event">
          <span className="next_event">PROXIMO EVENTO</span>
          <h1>31 | 12 | 2021</h1>

          <div className="icons">
            <img src="/img/landing/facebook_icon.svg" alt="" />
            <img src="/img/landing/twitter_icon.svg" alt="" />
            <img src="/img/landing/instagram_icon.svg" alt="" />
            <img src="/img/landing/youtube_icon.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
