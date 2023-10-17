import "./css.css"
import icon from "../assests/icon.png"
import { useEffect } from "react";
import AOS from 'aos';
import star from "../assests/star.png";
import { Container  } from "react-bootstrap";
function Testimonial(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
    return (
      <>
       
     <Container>
       <h2 class="h21a" data-aos="fade-right">Customer Testimonials</h2></Container>
      <div class="testimonial-bg back-image">
      <div class="wrapper">
            <div class="box" data-aos="fade-up">
          <div class="stars">
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
          </div>
          <br/>
          <p className="pa">I recently had the pleasure of using VB Enterprises for pigeon safety nets installation at my apartment balcony, and I must say I'm thoroughly impressed with their service and the quality of their products.
First and foremost, their customer service was top-notch.. They scheduled a site visit at my convenience .</p>
          <div class="content">
            <div class="info">
              <div class="name">Kishore Reddy</div>
              
            </div>
            <div class="right">
            <img src={icon} alt="icon-right" />
            </div>
          </div>
        </div>
        <div class="box" data-aos="fade-up">
          
          <div class="stars">
          <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
          </div>
          <br/>
          <p className="pa">I  purchased sports nets from VB Enterprises for my backyard. VB Enterprises truly exceeded my expectations in terms of both product quality and customer service.
The installation was smooth and hassle-free. The team from VB Enterprises arrived on time and set up the sports net efficiently.</p>
          <div class="content">
            <div class="info">
              <div class="name">Vamsi Naik</div>
              
            </div>
            <div class="right">
            <img src={icon} alt="icon-right" />
            </div>
          </div>
        </div>
        <div class="box" data-aos="fade-up">
          
          <div class="stars">
          <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
            <img src={star} alt="5-star" class="star-filled"></img>
          </div>
          <br/>
          <p className="pa">VB Enterprises' bird spikes are a game-changer for bird control. The spikes are sharp enough to deter birds while remaining humane. Installation is hassle-free with clear instructions, and durability stands up to weather. Overall, VB Enterprises delivers effective, ethical, and long-lasting bird control solutions.</p>
          <div class="content">
            <div class="info">
              <div class="name">Subash</div>
              
            </div>
            <div class="right">
             <img src={icon} alt="icon-right" />
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
);
};
export default Testimonial;