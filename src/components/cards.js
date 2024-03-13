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
function BasicExample() {
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
            <Col  lg={4} md={6} sm={12} xs={12}  className='py-4'>
    <Card className='Cards' style={{"borderRadius":"10px"}} >
      <Card.Img variant="top" src={image11} height={200}  alt='cards images'/>
      <Card.Body>
        <Card.Title className='title'>Bird Spikes</Card.Title>
        <Card.Text className='text'>
        Bird spike nets are effective bird deterrent systems commonly used on buildings, ledges, and other structures to prevent birds from perching or roosting.
        </Card.Text>
        <Row >
        <Col lg={5} md={5} sm={5} xs={5}><a href='/services'><h6 style={{"font-weight":"600","fontSize":"14px","color":"#0094FF",paddingTop:'15px'}}>View more</h6></a></Col>
        <Col lg={2} md={2} sm={2} xs={2}> <Nav.Link   href="https://wa.me/+919866678788" style={{"paddingRight":"0px"}} ><img src={whatsapp} style={{"padding":"0px","marginTop":"-8px"}} width={48} alt="whatsapp"></img></Nav.Link></Col>
       <Col lg={4} md={4} sm={4} xs={4}><center> <Button variant='success' href="tel:+919866678788" style={{"background-color":"#049E79","border-radius":"10px"}}>CONTACT</Button></center></Col>
       </Row>
      </Card.Body>
    </Card>
    </Col>
    <Col  lg={4} md={6} sm={12} xs={12}  className='py-4'>
    <Card className='Cards' style={{"borderRadius":"10px"}}>
      <Card.Img variant="top" src={image18}  height={200}  alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Pigeon Safety Nets</Card.Title>
        <Card.Text className='text' >
        Pigeon safety nets are durable barriers made of materials like nylon or stainless steel, preventing birds from entering spaces like balconies and windows. 
        </Card.Text>
        <Row >
        <Col lg={5} md={5} sm={5} xs={5}><a href='/services'><h6 style={{"font-weight":"600","fontSize":"14px","color":"#0094FF",paddingTop:'15px'}}>View more</h6></a></Col>
        <Col lg={2} md={2} sm={2} xs={2}> <Nav.Link   href="https://wa.me/+919866678788" style={{"paddingRight":"0px"}} ><img src={whatsapp} style={{"padding":"0px","marginTop":"-8px"}} width={48} alt="whatsapp"></img></Nav.Link></Col>
       <Col lg={4} md={4} sm={4} xs={4}><center> <Button variant='success' href="tel:+919866678788" style={{"background-color":"#049E79","border-radius":"10px"}}>CONTACT</Button></center></Col>
       </Row>

      </Card.Body>
    </Card>
    </Col>
    <Col lg={4} md={6} sm={12} xs={12}  className='py-4'>
    <Card className='Cards' style={{"borderRadius":"10px"}}>
      <Card.Img variant="top" src={image17}  height={200}  alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Children's Safety Nets</Card.Title>
        <Card.Text className='text' >
        A children's safety net is a holistic system of support and protection aimed at ensuring the safety, well-being and development of children.
        </Card.Text>
        <Row >
        <Col lg={5} md={5} sm={5} xs={5}><a href='/services'><h6 style={{"font-weight":"600","fontSize":"14px","color":"#0094FF",paddingTop:'15px'}}>View more</h6></a></Col>
        <Col lg={2} md={2} sm={2} xs={2}> <Nav.Link   href="https://wa.me/+919866678788" style={{"paddingRight":"0px"}} ><img src={whatsapp} style={{"padding":"0px","marginTop":"-8px"}} width={48} alt="whatsapp"></img></Nav.Link></Col>
       <Col lg={4} md={4} sm={4} xs={4}><center> <Button variant='success' href="tel:+919866678788" style={{"background-color":"#049E79","border-radius":"10px"}}>CONTACT</Button></center></Col>
       </Row>
      </Card.Body>
    </Card>
    </Col>
            <Col  lg={4} md={6} sm={12} xs={12} className='py-4'>
    <Card className='Cards' style={{"borderRadius":"10px"}}>
      <Card.Img variant="top"  src={image19} height={200}  alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Anti-Bird Nets:</Card.Title>
        <Card.Text className='text' >
        Anti-bird nets are specialized netting systems designed to prevent birds from roosting, nesting, or entering specific areas. 
        </Card.Text>
        <Row >
        <Col lg={5} md={5} sm={5} xs={5}><a href='/services'><h6 style={{"font-weight":"600","fontSize":"14px","color":"#0094FF",paddingTop:'15px'}}>View more</h6></a></Col>
        <Col lg={2} md={2} sm={2} xs={2}> <Nav.Link   href="https://wa.me/+919866678788" style={{"paddingRight":"0px"}} ><img src={whatsapp} style={{"padding":"0px","marginTop":"-8px"}} width={48} alt="whatsapp"></img></Nav.Link></Col>
       <Col lg={4} md={4} sm={4} xs={4}><center> <Button variant='success' href="tel:+919866678788" style={{"background-color":"#049E79","border-radius":"10px"}}>CONTACT</Button></center></Col>
       </Row>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4} md={6} sm={12} xs={12}  className='py-4'>
    <Card className='Cards' style={{"borderRadius":"10px"}}>
      <Card.Img variant="top"  src={image38}height={200}  alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Duct Area Safety Nets</Card.Title>
        <Card.Text className='text' >
        Duct area safety nets are essential safety measures for workers in confined or elevated spaces like ducts and tunnels. 
        </Card.Text>
        <Row >
        <Col lg={5} md={5} sm={5} xs={5}><a href='/services'><h6 style={{"font-weight":"600","fontSize":"14px","color":"#0094FF",paddingTop:'15px'}}>View more</h6></a></Col>
        <Col lg={2} md={2} sm={2} xs={2}> <Nav.Link   href="https://wa.me/+919866678788" style={{"paddingRight":"0px"}} ><img src={whatsapp} style={{"padding":"0px","marginTop":"-8px"}} width={48} alt="whatsapp"></img></Nav.Link></Col>
       <Col lg={4} md={4} sm={4} xs={4}><center> <Button variant='success' href="tel:+919866678788" style={{"background-color":"#049E79","border-radius":"10px"}}>CONTACT</Button></center></Col>
       </Row>

      </Card.Body>
    </Card>
    </Col>
    <Col  lg={4} md={6} sm={12} xs={12}  className='py-4'>
    <Card className='Cards' style={{"borderRadius":"10px"}}>
      <Card.Img variant="top" src={image25}  height={200} alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Construction Safety Nets:</Card.Title>
        <Card.Text className='text' >
        Construction safety nets are vital safety devices used on construction sites to prevent accidents and protect workers.
        </Card.Text>
          <Row >
        <Col lg={5} md={5} sm={5} xs={5}><a href='/services'><h6 style={{"font-weight":"600","fontSize":"14px","color":"#0094FF",paddingTop:'15px'}}>View more</h6></a></Col>
        <Col lg={2} md={2} sm={2} xs={2}> <Nav.Link   href="https://wa.me/+919866678788" style={{"paddingRight":"0px"}} ><img src={whatsapp} style={{"padding":"0px","marginTop":"-8px"}} width={48} alt="whatsapp"></img></Nav.Link></Col>
       <Col lg={4} md={4} sm={4} xs={4}><center> <Button variant='success' href="tel:+919866678788" style={{"background-color":"#049E79","border-radius":"10px"}}>CONTACT</Button></center></Col>
       </Row>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Button1/>
    </Container>
    
</>
  );
}

export default BasicExample;
