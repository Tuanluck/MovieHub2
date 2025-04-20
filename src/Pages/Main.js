import React, { useState } from 'react'
import './Styles/Main.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import GlobalFooter2 from '../Components/Globalfooter2';


export default function Main() {

  const[emailReq1,setEmailReq1]=useState(false);
  const[emailReq2,setEmailReq2]=useState(false);
  const [borderColor, setBorderColor] = useState('');
  const [borderColor2, setBorderColor2] = useState('');
  const navigate=useNavigate();

  function showEmailReq1(){
    setEmailReq1(true);
    setBorderColor('red');
  }
  function showEmailReq2(){
    setEmailReq2(true);
    setBorderColor2('red');
  }
  function hideEmailReq1(){
    setEmailReq1(false);
    setBorderColor('');
  }
  function hideEmailReq2(){
    setEmailReq2(false);
    setBorderColor2('');
  }
  function getStarted(){ 
    const userInput=document.getElementById('userEmailInput').value;
    const userInput2=document.getElementById('userEmailInput2').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let Email='';
    if(userInput){
      if(emailPattern.test(userInput)){
        Email=userInput;
      }else{
        showEmailReq1();
      }
    }
    if(userInput2){
      if(emailPattern.test(userInput2)){
        Email=userInput2;
      }else{
        showEmailReq1();
      }
    }
    if(Email){
      verfyEmail(Email)
      .then(isValid => {
        if (isValid) {
          navigate('/signin',{state:{email:Email}});
        } else {
          navigate('/registration',{state:{email:Email}});
        }
      });
    }
  }

  function verfyEmail(email){ //check, is email already registerd or not
    return fetch(`http://localhost:8080/api/verifyEmail/${email}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data; 
    });
  }

  return (
    <div>
<div className="home-main-container">
  <video 
    className="hero-video-bg" 
    src="/Assets/vientuong.MP4" 
    autoPlay 
    muted 
    loop 
    playsInline
  ></video>

  <div className="hero-masterhead">
    <img className='brand-logo' src='/Assets/Moviehub-logo.PNG'></img>
    <Button href='/login' className='text-light fw-bold btn-2' variant="danger">Sign In</Button>
  </div>
  <h1>Unlimited movies, TV shows, and more</h1>
  <h4>Watch anywhere. Cancel anytime.</h4>
  <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
  <div className="form-container">
    <Form className='email-input-container'>
      <Form.Control id="userEmailInput" className='email-input py-3' type="email" placeholder="Email Address"  style={{ borderColor: borderColor }}/>
    </Form>
    <Button onClick={getStarted} className='text-light fw-bold btn-1' variant="danger">Get Started&nbsp; <i class="bi bi-chevron-right"></i></Button>
  </div> 
  {emailReq1 && <div className="profile-name-validate profile-name-notvalidate email-required"><i class="bi bi-x-circle-fill"></i> Email is required.</div> }      
</div>

      <div className="home-main-shadow"></div>
      <div className="home-main-hero"></div> 
      <div className="home-section1">
        <div className="section-content">
            <h1 className='section-heading'>Enjoy on your TV</h1>
            <h2 className='section-text'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <img className='section-img' src='/Assets/tv.png'></img>
        <div className="video-1">
        <video 
          src="/Assets/video-tv.m4v" 
          loop 
          autoPlay 
          muted 
          className="video"
        ></video>
        </div>
      </div> 
      <div className="home-section2">
        <img className='section-img' src='/Assets/mobile-1.png'></img>
        <div className="section-content">
            <h1 className='section-heading'>Download your shows to watch offline</h1>
            <h2 className='section-text'>Save your favorites easily and always have something to watch.</h2>
        </div>
      </div> 
      <div className="home-section3">
        <div className="section-content">
            <h1 className='section-heading'>Watch everywhere</h1>
            <h2 className='section-text'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        </div>
      </div>
      <div className="home-section4">
        <img className='section-img' src='/Assets/kids.png'></img>
        <div className="section-content">
            <h1 className='section-heading'>Create profiles for kids</h1>
            <h2 className='section-text'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
        </div>
      </div>
      <div className="home-section5">
        <h1 className='text-light'>Frequently Asked Questions</h1>
        <br></br>
        <Accordion className='faq'>
          <Accordion.Item className='faq-item' eventKey="0">
            <Accordion.Header className='faq-head'>
              What is MoviHub?<img className='plus' src='./Assets/plus.png' />
            </Accordion.Header>
            <Accordion.Body className='faq-body'>
              MoviHub is an online movie streaming platform that offers a wide range of content, including movies, TV series, animations, and more. Enjoy high-quality entertainment anytime, anywhere on your favorite devices.
              <br /><br />
              There’s always something new to discover, with fresh content added regularly to keep your watchlist exciting.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className='faq-item' eventKey="1">
            <Accordion.Header>
              How much does MoviHub cost?<img className='plus' src='./Assets/plus.png' />
            </Accordion.Header>
            <Accordion.Body className='faq-body'>
              MoviHub offers flexible subscription plans to suit your needs:
              <br /><br />
              - <strong>Free:</strong> Watch a limited selection of content with ads.<br />
              - <strong>Basic:</strong> $3.49/month – Ad-free HD streaming.<br />
              - <strong>Premium:</strong> $5.99/month – 4K streaming on multiple devices.
              <br /><br />
              No hidden fees. Cancel anytime.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className='faq-item' eventKey="2">
            <Accordion.Header>
              Where can I watch MoviHub?<img className='plus' src='./Assets/plus.png' />
            </Accordion.Header>
            <Accordion.Body className='faq-body'>
              You can stream MoviHub on various devices including smartphones, tablets, smart TVs, laptops, and desktops through our website or official app.
              <br /><br />
              Download the MoviHub app on iOS or Android to watch offline and on the go.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className='faq-item' eventKey="3">
            <Accordion.Header>
              How do I cancel my subscription?<img className='plus' src='./Assets/plus.png' />
            </Accordion.Header>
            <Accordion.Body className='faq-body'>
              Canceling your MoviHub subscription is simple:
              <br /><br />
              1. Log in to your MoviHub account.<br />
              2. Go to “Account” → “Manage Subscription”.<br />
              3. Click “Cancel Plan” and confirm.
              <br /><br />
              You can still access content until the end of your billing cycle.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className='faq-item' eventKey="4">
            <Accordion.Header>
              What can I watch on MoviHub?<img className='plus' src='./Assets/plus.png' />
            </Accordion.Header>
            <Accordion.Body className='faq-body'>
              MoviHub offers a diverse catalog including:
              <br /><br />
              - Blockbuster movies<br />
              - Popular TV series from around the world<br />
              - Family and kids animations<br />
              - Exclusive and original content only on MoviHub
              <br /><br />
              Binge as much as you like with no limits.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className='faq-item' eventKey="5">
            <Accordion.Header>
              Is MoviHub safe for kids?<img className='plus' src='./Assets/plus.png' />
            </Accordion.Header>
            <Accordion.Body className='faq-body'>
              Yes! MoviHub provides a dedicated <strong>MoviHub Kids</strong> mode with curated content suitable for children.
              <br /><br />
              Parents can set up parental controls and PIN protection to restrict content and ensure a safe viewing experience for kids.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br><br></br>
        <h4 className='text-light'>Ready to watch? Enter your email to create or restart your membership.</h4>
          <div className="form-container2">
            <Form className='email-input-container'>
              <Form.Control id="userEmailInput2" className='email-input py-3' type="email" placeholder="Email Address"  style={{ borderColor: borderColor2 }}/>
            </Form>
            <Button onClick={getStarted} className='text-light fw-bold btn-2 btn-3' variant="danger">Get Started&nbsp; <i class="bi bi-chevron-right"></i></Button>
          </div> 
          {emailReq2 && <div className="profile-name-validate profile-name-notvalidate email-required2"><i class="bi bi-x-circle-fill"></i> Email is required.</div> }  
      </div> 
      <GlobalFooter2/>
    </div>
  )
}
