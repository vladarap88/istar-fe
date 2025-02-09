import React, { useState } from 'react';
import axios from 'axios';
import CONFIG from '../config';
import './FormPage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    email: '',
    personal_note: '',
  });
  const [pdfFile, setPdfFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(CONFIG.BACKEND_URL,
        formData,
        { responseType: 'blob' },
      );

      if (res.headers['content-type'] !== 'application/pdf') {
        throw new Error('The response is not a PDF file');
      }

      const blob = res.data;
      const fileUrl = URL.createObjectURL(blob);
      setPdfFile(fileUrl);

    } catch (error) {
      console.error('Error: ', error.message);
    }
  };

  return (
    <div className="form-page-container">
      <div className="intro">
        <div className="logo">
          <img src="/images/logo.jpeg" alt="iStar Logo" />
        </div>
        <div className="header">
          <h1>Create Your Personalized Book!</h1>
          <p>Who is the story book hero?</p>
        </div>
      </div>

      <div className="form-container">
        <div className="form-description">
          <p>Enter your details below to bring your unique book to life.</p>
          <div className="instructions">
            <p>✨ <strong>What you need to do:</strong></p>
            <ul>
              <li><strong>First Name & Last Name:</strong> Only letters, max 20 characters</li>
              <li><strong>Date of Birth:</strong> Follow the format</li>
              <li><strong>Email (Optional):</strong> Get your book sent straight to your inbox!</li>
              <li><strong>Personal Note (Optional):</strong> Add a special touch (max 200 characters)</li>
            </ul>
            <p>📖 Once you submit, you'll receive a beautifully crafted book made just for you!</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" pattern="[A-Za-z]+" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required maxLength={20} />
          <input type="text" pattern="[A-Za-z]+" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required maxLength={20} />
          <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email (optional)" value={formData.email} onChange={handleChange} />
          <textarea name="personal_note" placeholder="Personal Note (optional, max 200 characters)" value={formData.personal_note} onChange={handleChange} maxLength={200} />
          <button type="submit" className="submit-button">Make Your Personal Book</button>
        </form>

        {pdfFile && (
          <div className="pdf-preview">
            <h2>Preview</h2>
            <object data={pdfFile} type="application/pdf" width="100%" height="600px">
              <p>Your browser does not support PDFs. <a href={pdfFile}>Download it here</a>.</p>
            </object>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPage;
