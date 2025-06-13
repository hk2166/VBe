import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./cardscss.css";
import Button1 from "./button.js";
import  image11 from "../assests/image11.png";
import image38 from "../assests/image38.jpeg";
import image17 from "../assests/image17.png";
import image18 from "../assests/image18.png";
import image19 from "../assests/image19.png";
import image25 from "../assests/image25.jpg";
import AOS from 'aos';
import { useEffect } from 'react';
import whatsapp from "../assests/whatsapp.png";
import Nav from 'react-bootstrap/Nav';
import image01 from "../assests/image01.png";
import image13 from "../assests/image13.png";
import image16 from "../assests/image16.png";
import image20 from "../assests/image20.png";
import image26 from "../assests/image26.jpeg";
import image27 from "../assests/image26.jpg";
import image28 from "../assests/image28.jpg";
import image29 from "../assests/image29.jpg";
import image30 from "../assests/image30.jpg";
import image32 from "../assests/image32.jpg";
import image33 from "../assests/image33.png";
import image34 from "../assests/image34.jpg";
import image35 from "../assests/image35.jpg";
import image36 from "../assests/image36.jpg";
import image37 from "../assests/image37.jpg";
import { useLocation } from 'react-router-dom';

const services = [
  {
    title: "Bird Spikes",
    img: image11,
    desc: "Bird spike nets are effective bird deterrent systems commonly used on buildings, ledges, and other structures to prevent birds from perching or roosting.",
    anchor: "bird-spikes"
  },
  {
    title: "Pigeon Safety Nets",
    img: image18,
    desc: "Pigeon safety nets are durable barriers made of materials like nylon or stainless steel, preventing birds from entering spaces like balconies and windows.",
    anchor: "pigeon-safety-nets"
  },
  {
    title: "Children's Safety Nets",
    img: image17,
    desc: "A children's safety net is a holistic system of support and protection aimed at ensuring the safety, well-being, development of children and more.",
    anchor: "children-safety-nets"
  },
  {
    title: "Anti Bird Nets",
    img: image19,
    desc: "Anti-bird nets are specialized netting systems designed to prevent birds from roosting, nesting, or entering specific areas.",
    anchor: "anti-bird-nets"
  },
  {
    title: "Duct Area Safety Nets",
    img: image38,
    desc: "Duct area safety nets are essential safety measures for workers in confined or elevated spaces like ducts and tunnels.",
    anchor: "duct-area-safety-nets"
  },
  {
    title: "Construction Safety Nets",
    img: image25,
    desc: "Construction safety nets are vital safety devices used on construction sites to prevent accidents and protect workers.",
    anchor: "construction-safety-nets"
  },
  {
    title: "Industrial Safety Nets",
    img: image26,
    desc: "Industrial safety nets safeguard employees and equipment by catching falling objects, crucial for safer workplaces.",
    anchor: "industrial-safety-nets"
  },
  {
    title: "Coconut Safety Nets",
    img: image13,
    desc: "Coconut safety nets provide essential protection from falling coconuts, ensuring safety in coconut tree-rich areas.",
    anchor: "coconut-safety-nets"
  },
  {
    title: "Pets Safety Nets",
    img: image27,
    desc: "Pets safety nets protect your furry friends from falling or escaping. It keeps pets safe in all aspects.",
    anchor: "pets-safety-nets"
  },
  {
    title: "Balcony Safety Nets",
    img: image20,
    desc: "Balcony safety nets are vital for preventing accidents and ensuring safety, especially for children and pets, in high-rise buildings.",
    anchor: "balcony-safety-nets"
  },
  {
    title: "Swimming pool Safety Nets",
    img: image28,
    desc: "Swimming pool safety nets are crucial for preventing accidental drowning, ensuring the safety of children and pets while maintaining pool access.",
    anchor: "swimming-pool-safety-nets"
  },
  {
    title: "Shade Nets",
    img: image29,
    desc: "Shade nets offer sun protection for crops and outdoor spaces, promoting healthy growth and comfort in hot weather.",
    anchor: "shade-nets"
  },
  {
    title: "All Sports Nets",
    img: image30,
    desc: "Sports nets are essential for various sports, ensuring fair play and containment of balls in different materials and sizes.",
    anchor: "all-sports-nets"
  },
  {
    title: "Cricket Practice Nets",
    img: image16,
    desc: "Cricket practice nets are dedicated enclosures for players to enhance batting, bowling, and fielding skills, essential for training and performance improvement.",
    anchor: "cricket-practice-nets"
  },
  {
    title: "Artificial Grass",
    img: image32,
    desc: "Artificial grass, a low-maintenance alternative to real grass, offers a lush, green appearance for residential, sports, and commercial spaces.",
    anchor: "artificial-grass"
  },
  {
    title: "Mosquito Nets",
    img: image33,
    desc: "Mosquito nets are vital barriers against disease-carrying insects, especially effective in preventing mosquito-borne illnesses.",
    anchor: "mosquito-nets"
  },
  {
    title: "Turf For Cricket Pitch",
    img: image34,
    desc: "Cricket pitch turf is meticulously prepared to provide a smooth, consistent bounce for fair and competitive gameplay, with grass type and maintenance tailored to local conditions.",
    anchor: "turf-for-cricket-pitch"
  },
  {
    title: "Glass Safety Nets",
    img: image35,
    desc: "Glass safety nets offer both safety and aesthetics, providing protection in elevated areas while maintaining transparency and design aesthetics.",
    anchor: "glass-safety-nets"
  },
  {
    title: "Monkey Saftey Nets",
    img: image36,
    desc: "Monkey safety nets are robust barriers preventing monkey intrusions in various settings, ensuring safety and cleanliness.",
    anchor: "monkey-saftey-nets"
  },
  {
    title: "Pegion Net for Balcony",
    img: image37,
    desc: "Durable pigeon safety nets deter bird infestations, protect property, and ensure hygiene with proper maintenance.",
    anchor: "pigeon-net-for-balcony"
  },
];

function BasicExample() {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <>
    <Container >
      <h2 className='h2' data-aos="fade-right" > Our Services</h2>
        <Row  data-aos="fade-up" >
          {(isServicesPage ? services : services.slice(0, 10)).map((service, idx) => (
            <Col key={service.title} lg={4} md={6} sm={12} xs={12} className='py-4'>
              <Card className='Cards' style={{"borderRadius":"10px"}}>
                <Card.Img variant="top" src={service.img} height={200} alt='cards images'/>
                <Card.Body>
                  <Card.Title className='title'>{service.title}</Card.Title>
                  <Card.Text className='text'>{service.desc}</Card.Text>
                  <Row>
                    <Col lg={5} md={5} sm={5} xs={5}>
                      <a href={`/services#${service.anchor}`}>
                        <h6 style={{fontWeight:"600",fontSize:"14px",color:"#0094FF",paddingTop:'15px'}}>View more</h6>
                      </a>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2}>
                      <Nav.Link href="https://wa.me/+919866678788" style={{paddingRight:"0px"}}>
                        <img src={whatsapp} style={{padding:"0px",marginTop:"-8px"}} width={48} alt="whatsapp"/>
                      </Nav.Link>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                      <center>
                        <Button variant='success' href="tel:+919866678788" style={{backgroundColor:"#049E79",borderRadius:"10px"}}>CONTACT</Button>
                      </center>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {!isServicesPage && (
          <Row className="justify-content-center mt-4">
            <Col xs="auto">
              <Button variant="primary" href="/services" style={{backgroundColor:"#0094FF",borderRadius:"10px"}}>View All</Button>
            </Col>
          </Row>
        )}
        <Button1/>
    </Container>
    </>
  );
}

export default BasicExample;