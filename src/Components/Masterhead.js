import React from 'react';
import './Styles/Masterhead.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa500px } from '@fortawesome/free-brands-svg-icons';

export default function Masterhead() {
  return (
    <div className='ms-head'>
      <div 
        className="masterhead-logo-container"
        onClick={() => window.location.href = '/'}
        style={{ cursor: 'pointer' }}
      >
        <FontAwesomeIcon 
          icon={fa500px} 
          className="masterhead-logo-icon"
        />
        <span className="masterhead-logo-text">
          MovieHub
        </span>
      </div>
      <a href='/login' className="signin-btn">
        Sign In
      </a>       
    </div>
  );
}