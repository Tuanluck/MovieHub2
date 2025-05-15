import React, { useState } from 'react'
import './Styles/Main.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import GlobalFooter2 from '../Components/Globalfooter2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa500px } from '@fortawesome/free-brands-svg-icons';

export default function Main() {
  const [emailReq1, setEmailReq1] = useState(false);
  const [emailReq2, setEmailReq2] = useState(false);
  const [borderColor, setBorderColor] = useState('');
  const [borderColor2, setBorderColor2] = useState('');
  const navigate = useNavigate();

  function showEmailReq1() {
    setEmailReq1(true);
    setBorderColor('red');
  }
  
  function showEmailReq2() {
    setEmailReq2(true);
    setBorderColor2('red');
  }
  
  function hideEmailReq1() {
    setEmailReq1(false);
    setBorderColor('');
  }
  
  function hideEmailReq2() {
    setEmailReq2(false);
    setBorderColor2('');
  }

  function getStarted() { 
    const userInput = document.getElementById('userEmailInput').value;
    const userInput2 = document.getElementById('userEmailInput2').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let Email = '';
    
    if(userInput) {
      if(emailPattern.test(userInput)) {
        Email = userInput;
      } else {
        showEmailReq1();
      }
    }
    
    if(userInput2) {
      if(emailPattern.test(userInput2)) {
        Email = userInput2;
      } else {
        showEmailReq2();
      }
    }
    
    if(Email) {
      verfyEmail(Email)
      .then(isValid => {
        if (isValid) {
          navigate('/signin', {state: {email: Email}});
        } else {
          navigate('/registration', {state: {email: Email}});
        }
      });
    }
  }

  function verfyEmail(email) {
    return fetch(`http://localhost:8080/api/verifyEmail/${email}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error verifying email:', error);
      return false;
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
          <div className="brand-logo-container">
            <FontAwesomeIcon 
              icon={fa500px} 
              style={{ 
                color: "#00aced", 
                fontSize: "2.5rem",
                marginRight: "10px"
              }} 
            />
            <span 
              style={{
                fontFamily: "'Arial Black', sans-serif",
                fontSize: "2rem",
                background: "linear-gradient(to right, #00aced, #ff0000)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold"
              }}
            >
              MovieHub
            </span>
          </div>
          <Button href='/login' className='text-light fw-bold btn-2' variant="danger">Sign In</Button>
        </div>
        
        <h1>Unlimited movies, TV shows, and more</h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
        
        <div className="form-container">
          <Form className='email-input-container'>
            <Form.Control 
              id="userEmailInput" 
              className='email-input py-3' 
              type="email" 
              placeholder="Email Address"  
              style={{ borderColor: borderColor }}
              onFocus={hideEmailReq1}
            />
          </Form>
          <Button onClick={getStarted} className='text-light fw-bold btn-1' variant="danger">
            Get Started&nbsp; <i className="bi bi-chevron-right"></i>
          </Button>
        </div> 
        
        {emailReq1 && 
          <div className="profile-name-validate profile-name-notvalidate email-required">
            <i className="bi bi-x-circle-fill"></i> Please enter a valid email address.
          </div>
        }      
      </div>

      {/* Rest of your sections remain the same */}
      <div className="home-main-shadow"></div>
      <div className="home-main-hero"></div> 
      
      <div className="home-section1">
        <div className="section-content">
          <h1 className='section-heading'>Enjoy on your TV</h1>
          <h2 className='section-text'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <img className='section-img' src='/Assets/tv.png' alt="TV"></img>
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
      
      {/* Other sections... */}
      
      <div className="home-section5">
        <h1 className='text-light'>Frequently Asked Questions</h1>
        <br></br>
        <Accordion className='faq'>
          {/* FAQ items remain the same */}
        </Accordion>
        <br></br><br></br>
        <h4 className='text-light'>Ready to watch? Enter your email to create or restart your membership.</h4>
        <div className="form-container2">
          <Form className='email-input-container'>
            <Form.Control 
              id="userEmailInput2" 
              className='email-input py-3' 
              type="email" 
              placeholder="Email Address"  
              style={{ borderColor: borderColor2 }}
              onFocus={hideEmailReq2}
            />
          </Form>
          <Button onClick={getStarted} className='text-light fw-bold btn-2 btn-3' variant="danger">
            Get Started&nbsp; <i className="bi bi-chevron-right"></i>
          </Button>
        </div> 
        {emailReq2 && 
          <div className="profile-name-validate profile-name-notvalidate email-required2">
            <i className="bi bi-x-circle-fill"></i> Please enter a valid email address.
          </div>
        }  
      </div> 
      
      <GlobalFooter2/>
    </div>
  )
}