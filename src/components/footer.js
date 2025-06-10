import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo1 from '../assests/vb-logo-1.png';
import LinkedIn from '../assests/linkedin.png';
import facebook from '../assests/facebook.png';
import instagram from '../assests/instagram.png';
import email from "../assests/email.png";
import phone from "../assests/phn.png";
import "./foot.css";
import whatsapp from "../assests/whatsapp.png";
function HeaderAndFooterExample() {
  return (
    <Card >
      <Card.Body class='CardBody'>
      <Container>
      <Row>
        <Col lg={3} md={6} sm={12}><a href='/' ><Image src={logo1}   alt='image of vb'  /></a>
        <Nav.Link href="#" className='column1' > Karmanghat,</Nav.Link>
      <Nav.Link eventKey="link-1" className='links1' > greenpark colony road no 12,</Nav.Link>
      <Nav.Link eventKey="link-2" className='links1'>Saidabad,</Nav.Link>
      <Nav.Link eventKey="link-2" className='links1'>Manikonda,</Nav.Link>
      <Nav.Link eventKey="link-2" className='links1'>500035,</Nav.Link>
      <Nav.Link eventKey="link-2"  className='links1'>Hyderabad,</Nav.Link>
      <Nav.Link eventKey="link-2"  className='links1'>Telangana.</Nav.Link>
      <Nav.Link eventKey="link-2" href="tel:+919866678788"  className='links1'>(+91)98666 78788</Nav.Link>
        </Col>
        <Col lg={3} md={6} sm={12} className='column2' >
        <h5 className='size3'>NAVIGATIONS</h5>
      <Nav.Link href="/" class='links2' >Home</Nav.Link>
      <Nav.Link eventKey="link-1" href="/about"  class='links2'>About</Nav.Link>
      <Nav.Link eventKey="link-2" href="/services" class='links2'>Services</Nav.Link>
      <Nav.Link eventKey="link-2"  href="/projects" class='links2'>Projects</Nav.Link>
        </Col>
        <Col lg={3} md={6} sm={12} className='column2' >
        <h5 className='size3' >CONTACT  US</h5>
   
   <Nav.Link href="tel:+919866678788"  class='links2'><img src={phone} width={25} alt='phone-icon' />(+91) 9866678788  </Nav.Link>
   <Nav.Link eventKey="link-1"  href="mailto:vbenterprises42@gmail.com"  class='links2'><img src={email} width={30} alt='email-icon' style={{"padding":"5px"}} />vbenterprises42@gmail.com</Nav.Link>
   <Nav.Link  href="https://wa.me/+919866678788" class='links2' style={{"padding":"5px"}}><img src={whatsapp} style={{"padding":"0px","marginTop":"-10px"}} width={28} alt="whatsapp"></img> whatsapp </Nav.Link>
        </Col>
         <Col lg={3} md={6} sm={12}  className='column2'>
         <h5 className='size3' >SOCIAL MEDIA</h5>
       <div class='topp'>  <a href="https://www.facebook.com/profile.php?id=61565076555634&sk=about"><img  src={facebook} alt='facebook-link' ></img></a><a href="https://www.linkedin.com/company/vbenterprises/"><img className='link'  src={LinkedIn} alt='twitter-icon' ></img></a><a href="https://www.instagram.com/vbenterprises_?igsh=MW9tbmVkMGhsNmIxYw==" ><img  src={instagram} alt='instagram-icon'></img></a></div>
         </Col>
      </Row>
      </Container>
      </Card.Body>
      <Card.Footer class="text-center  text-white" style={{"fontSize":"13px"}}>Copyright ©2023  VB Enterprises. All rights reserved. - Designed and Developed by <a href='www.artflixdesign.com' className='text-white'> Artflix</a></Card.Footer>
    </Card>
  
  );
}

export default HeaderAndFooterExample;