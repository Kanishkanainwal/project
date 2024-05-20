import { color } from 'framer-motion';
import React from 'react';
import './about.css';
const About = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://th.bing.com/th/id/OIP.VW-OrugRGmbuZ4nefrDqdgHaGl?&rs=1&pid=ImgDetMain")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding:'30px 500px 30px 0px',
   
    color:'white'
  };

  return (
    <div style={backgroundImageStyle} className='text'>
    Welcome to <b>ECHO TALK</b>, where cutting-edge technology meets unparalleled user experience. Our mission is to revolutionize how people interact online through innovative solutions that blend AI and real-time communication seamlessly.
    <br/>
    <br/>
<b>
  
    <h1>Our Vision</h1></b>

We envision a world where technology bridges gaps, fosters connections, and empowers individuals to achieve more. Our commitment is to develop tools that make communication intuitive, efficient, and accessible to everyone.

<br/>
<br/>
   <b><h1>What We Offer</h1></b>
   <br/>
<b>A.I.  CHATBOT:</b>
<br/>
<br/>
Smart Interactions:<br/>
 Our AI chatbot uses advanced natural language processing (NLP) to provide accurate and context-aware responses.
24/7 <br/>
Availability:<br/>
 Always ready to assist, ensuring that your queries are resolved anytime, anywhere.<br/>
Customizable:<br/> Tailor the chatbot's responses to fit your specific needs and branding.<br/>
Real-Time Communication:<br/>

Video Chat:<br/> High-definition video calls for personal and professional use, making distant interactions feel more personal.
<br/>Text Chat:<br/> Instant messaging with real-time notifications, ensuring you never miss an important message.
<br/>Secure and Reliable:<br/> Our platform prioritizes your privacy and data security, offering a safe space for all your communications.
<br/><br/>Our Technology<br/>
Utilizing the latest advancements in artificial intelligence and web development, we ensure our platform is robust, scalable, and user-friendly. Built on React, our website guarantees a smooth and responsive experience across all devices.
<br/><br/>
Our Commitment<br/>
We are dedicated to continuous improvement and customer satisfaction. Your feedback is invaluable, helping us to refine our offerings and deliver solutions that exceed your expectations.
<br/><br/>
Join Us on Our Journey<br/>
Be a part of our growing community. Whether you're a business looking to enhance customer interaction or an individual seeking efficient communication tools, [Your Company Name] is here to support your needs. Explore our services and experience the future of digital communication today.


    </div>
  );
};

export default About;