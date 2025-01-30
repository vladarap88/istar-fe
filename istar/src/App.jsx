import { useState } from 'react';
import axios from 'axios';
import CONFIG from './config';
import './App.css';  // Import the CSS

function App() {
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
      const res = await axios.get(CONFIG.BACKEND_URL, {
        params: formData,  // Sending the form data as query parameters
        responseType: 'blob',  // Expecting a PDF file in blob format
      });

      // Check if the response is a PDF (by checking content-type header)
      if (res.headers['content-type'] !== 'application/pdf') {
        throw new Error('The response is not a PDF file');
      }

      // Create a Blob URL from the response data
      const blob = res.data;
      const fileUrl = URL.createObjectURL(blob);
      setPdfFile(fileUrl);  // Set the PDF Blob URL

    } catch (error) {
      // Handle errors
      if (error.response) {
        console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
      } else if (error.request) {
        console.error('Error: No response received from the server');
      } else {
        console.error('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="app-container"> {/* Main container */}
      <header className="app-header">
        <div className="logo">Storybook Magic!</div>
        <h1>Who is Your Storybook Hero?</h1>
        <p className="header-description">
          Fill in the details to create your very own storybook hero!
        </p>
      </header>

      <main className="app-main">
        <div className="form-card"> {/* Card-like container for the form */}
          <p className="form-instructions">
            After filling out the details, you'll get your very own storybook!
          </p>
          <form onSubmit={handleSubmit} className="story-form">
            <div className="input-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="first_name"
                value={formData.first_name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="last_name"
                value={formData.last_name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="birthDate">Date of Birth*</label>
              <input
                type="date"
                id="birthDate"
                name="birth_date"
                value={formData.birth_date}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email (Optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="personalNote">Personal Note (Optional)</label>
              <textarea
                id="personalNote"
                name="personal_note"
                value={formData.personal_note}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-button">Make Your Book!</button>
          </form>
        </div>

        {/* PDF Preview and Loading Message */}
        {pdfFile ? (
          <div className="pdf-container">
            <h2>Your Storybook Preview</h2>
            <object
              data={pdfFile}
              type="application/pdf"
              width="100%"  // Full width
              height="600px"  // Set fixed height for the PDF preview
            >
              <p>Your browser does not support PDFs. <a href={pdfFile}>Download the PDF</a>.</p>
            </object>
          </div>
        ) : (
          <p>No PDF preview available yet.</p>
        )}
      </main>
    </div>
  );
}

export default App;
