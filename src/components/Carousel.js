import React from "react";
import Container from "react-bootstrap/Container"
import "./carousel.scss";
import Card from "./Card";
import Sdata from "./carddata";
import { useEffect } from "react";
import AOS from 'aos';
import './home.scss';
import "./card.scss"

function Carousel() {
  function nmap(val){
    return(
        <>
       <Card icon1={val.icon1}
        heading1={val.heading1}
        heading2={val.heading2}
       />
        </>
    )
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <section className="section main-section parallax-scene-js slider">
    <div className="slide" />
    <div className="slide" />
    <div className="slide" />
    <div className="slide" />
    <div className="slide" />
    <div className="slide" />
    <div className="slide" />
    <div className="slide" />
    <div className="slide" />
    <div className="slide" />
    <div className="slide" />
    <div className="home_container"  data-aos="fade-up">
            <Container>
                         <p className="heading"  >Protecting Every Space, One Net at a Time: Safeguard Every Space with Our Safety Nets</p>
         <p className="heading2"  >VB Enterprises: Safeguarding Every Space, One Net at a Time. From balconies to construction sites, trust our safety nets to provide reliable protection against pests and accidents.</p>
         <a href="tel:+919866678788"  className="button">CALL NOW</a>
         </Container>
      
         </div>
         <div className="cards_container"  data-aos="fade-up">
        {Sdata.map(nmap)}
    </div> 
  </section>
);
}
export default Carousel;

