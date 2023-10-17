import React from "react";
import './home.scss'
import Card from "./Card";
import Sdata from "./carddata";
import Container from "react-bootstrap/Container"
import { useEffect } from "react";
import AOS from 'aos';
function Home(){
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
    return(<>
        <></>
        <div className="home_background">
        <div className="home_container"  data-aos="fade-up">
            <Container>
                         <p className="heading"  >Rest easy knowing that your safety is <br/>securely in our hands.</p>
         <p className="heading2"  >A safety net is a net that reduces the height of a fall from a high place and <br/>softens the impact to protect people.</p>
         <a href="tel:+919866678788"  className="button">CALL NOW</a>
         </Container>
         </div>
         <div className="cards_container"  data-aos="fade-up">
        {Sdata.map(nmap)}
        </div>
        </div>
        
    </>)
}
export default Home