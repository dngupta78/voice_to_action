// import React from 'react';
import './Home.css'; // Import CSS file for styling
import medical_icon from "../../assets/medical_icon.png"
import business_icon from "../../assets/business_icon.png"
import technology_icon from "../../assets/technology_icon.png"

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Speech-to-Text Recognition</h1>
      <p>
        Speech-to-text recognition technology converts spoken language into text, providing a convenient and efficient way to transcribe verbal communication into written form.
      </p>
      <div className="features">
        <div className="feature">
          <img src={medical_icon} alt="Medical Icon" />
          <h2>Healthcare Applications</h2>
          <p>
            Speech-to-text technology is widely used in the healthcare industry to improve documentation efficiency, streamline clinical workflows, and enhance communication between healthcare professionals.
          </p>
        </div>
        <div className="feature">
          <img src={business_icon} alt="Business Icon" />
          <h2>Business Value</h2>
          <p>
            By automating transcription tasks, speech-to-text recognition technology can increase productivity, reduce costs, and improve decision-making in various industries, including healthcare, legal, education, and customer service.
          </p>
        </div>
        <div className="feature">
          <img src={technology_icon} alt="Technology Icon" />
          <h2>Technological Advancements</h2>
          <p>
            Advances in artificial intelligence (AI) and natural language processing (NLP) have led to significant improvements in speech recognition accuracy, enabling more reliable and accurate transcription of spoken language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
