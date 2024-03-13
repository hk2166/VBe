import AOS from 'aos';
import { useEffect } from 'react';
import "./Host3.css";
function ImgOverlayExample() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (

  <div className='home-image'>
 <div className='centered'>
  <h2 style={{"fontSize":"50px"}}>Our Services</h2>
 </div>
  </div>
  );
}

export default ImgOverlayExample;