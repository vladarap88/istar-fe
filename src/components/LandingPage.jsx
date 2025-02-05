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
            onClick={() => navigate('/form')} 
          >
            Create Your Book
          </button>
        </div>
        
        {/* Added description */}
        <section className="story-description">
          <p>
            Dean and Adam, two adventurous brothers, embark on a magical journey to find the perfect name for a baby born in their village. Along the way, they meet wonderful animals, each contributing a letter to create the perfect name. Join them on this unforgettable adventure to find a name that matches the baby's heart and dreams!
          </p>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
