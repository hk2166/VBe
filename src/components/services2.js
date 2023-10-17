import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./cardscss.css";
import Button1 from "./button.js"
import  image11 from "../assests/image11.png";
import image18 from "../assests/image18.png";
import image17 from "../assests/image17.png";
import AOS from 'aos';
import { useEffect } from 'react';
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
        <h2 className='h2' data-aos="fade-right"> Our Services</h2>
          <Row  data-aos="fade-up" >
              <Col className='Col'>
      <Card className='Cards'>
        <Card.Img variant="top" src={image11} height={200} alt='cards images'/>
        <Card.Body>
          <Card.Title className='title'  >Bird Spikes:</Card.Title>
          <Card.Text className='text'  >
          Bird spike nets are effective bird deterrent systems commonly used on buildings, ledges, and other structures to prevent birds from perching or roosting.
          </Card.Text>
          <Row >
              <Col><a href='/services'><h6 style={{"font-weight":"600","fontSize":"16px","color":"#0094FF"}}>View more</h6></a></Col>
         <Col> <Button  variant='success'  href="tel:+919866678788" style={{"background-color":"#049E79","width":"176px","border-radius":"10px"}}>CONTACT</Button></Col>
         </Row>
  
        </Card.Body>
      </Card>
      </Col>
      <Col className='Col' >
      <Card className='Cards'>
        <Card.Img variant="top" src={image17}  height={200}  alt='cards images'/>
        <Card.Body>
          <Card.Title  className='title' >Pigeon Safety Nets</Card.Title>
          <Card.Text className='text' >
          Pigeon safety nets are durable barriers made of materials like nylon or stainless steel, preventing birds from entering spaces like balconies and windows. 
          </Card.Text>
          <Row >
              <Col><a href='/services'><h6 style={{"font-weight":"600","fontSize":"16px","color":"#0094FF"}}>View more</h6></a></Col>
         <Col> <Button variant='success'  href="tel:+919866678788" style={{"background-color":"#049E79","width":"176px","border-radius":"10px"}}>CONTACT</Button></Col>
         </Row>
  
        </Card.Body>
      </Card>
      </Col>
      <Col className='Col'>
      <Card className='Cards'>
        <Card.Img variant="top" src={image18}  height={200}  alt='cards images'/>
        <Card.Body>
          <Card.Title  className='title' >Children's Safety Nets</Card.Title>
          <Card.Text className='text' >
          A children's safety net is a holistic system of support and protection aimed at ensuring the safety, well-being and development of children.
          </Card.Text>
          <Row >
              <Col><a href='/services'><h6 style={{"font-weight":"600","fontSize":"16px","color":"#0094FF"}}>View more</h6></a></Col>
         <Col> <Button variant='success'  href="tel:+919866678788" style={{"background-color":"#049E79","width":"176px","border-radius":"10px"}}>CONTACT</Button></Col>
         </Row>
        </Card.Body>
      </Card>
      </Col>
      </Row>
     <div style={{"paddingTop":"45px"}}> <Button1/> </div>
      </Container>
      </>
      )
      }
      export default BasicExample;