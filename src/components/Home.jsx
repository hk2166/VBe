import React from "react";
import './home.scss'
import Card from "./Card";
import Sdata from "./carddata";
import { useEffect } from "react";
import AOS from 'aos';
import Carousel from "../components/Carousel";

function Home(){
    return(
    <>
           <div className="home_background"> 
        <Carousel/>
    {/*  <div className="home_container"  data-aos="fade-up">
            <Container>
                         <p className="heading"  >Rest easy knowing that your safety is <br/>securely in our hands.</p>
         <p className="heading2"  >A safety net is a net that reduces the height of a fall from a high place and <br/>softens the impact to protect people.</p>
         <a href="tel:+919866678788"  className="button">CALL NOW</a>
         </Container>
    </div> 
         <div className="cards_container"  data-aos="fade-up">
        {Sdata.map(nmap)}
    </div> */}
  </div>
    </>
    )
}
export default Home;