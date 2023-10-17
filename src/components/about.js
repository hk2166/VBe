import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import profile from "../assests/profile.png";
import caps from "../assests/caps.png";
import AOS from 'aos';
import { useEffect } from 'react';
import "./conten.css"
function ShapeExample() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <Container>
      <Row className='rooow' >
        <Col lg={3} data-aos="fade-right" >
          <Image src={profile} alt='profile-img' roundedCircle />
        </Col>
        <Col lg={9} data-aos="fade-left">
          <Row className='rooow'>
            <Col lg={10} md={10} className='heading2' >
            <h3 >Vinodh Arjilli</h3>
            <h6 style={{"color":"#858383"}}> F o u n d e r </h6>
            </Col>
            <Col lg={2} md={2}  >
            <Image src={caps} alt='profile-img' rounded/>

            </Col>
          </Row>
          <Card data-aos="fade-left" style={{"borderRadius": "15px","border":" 2px solid #049E79"}}>
      <Card.Body style={{"padding":"30px 10px 30px 10px"}}>Our mission goes beyond simply supplying nets; it centers on delivering a profound sense of peace of mind. At our core, we hold the unwavering belief that every net we provide represents a powerful promise of safety and security.

We understand that in an increasingly complex and unpredictable world, where our homes extend beyond brick and mortar, the safety of our loved ones, including our cherished pets, is paramount.<br/> Our commitment is deeply rooted in the idea that our products are not just physical barriers; they are a symbol of trust, reliability, and the assurance that when our nets are in place, families and their pets can enjoy life's beautiful moments without worry.</Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;