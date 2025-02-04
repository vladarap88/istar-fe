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
    <div className="form-container">
      <div className="header">
       <span className="title">WHO IS THE STORY BOOK HERO?</span>
     </div>


     <p className="description">
       [TBD: add a paragraph that describes the details needed in the form
       what you must complete and what is optional]
     </p>
     <p className="instructions">
       After completing the details you will get your personal book
     </p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
        <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
        <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email (optional)" value={formData.email} onChange={handleChange} />
        <textarea name="personal_note" placeholder="Personal Note (optional, max 200 characters)" value={formData.personal_note} onChange={handleChange} maxLength={200}/>
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
  );
};

export default FormPage;