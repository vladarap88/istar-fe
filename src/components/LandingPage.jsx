import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header>
        <div className="logo">
          <img src="/images/logo.jpeg" alt="iStar Logo" /> 
        </div>
      </header>

      <main>
        <div className="hero">
          <h1>Make Your Personal Book</h1>
          <p>Turn your child into the hero of their own story!</p>
          <button 
            className="create-book-button"
            onClick={() => navigate('/form')}  // Navigate to FormPage
          >
            Create Your Book
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
