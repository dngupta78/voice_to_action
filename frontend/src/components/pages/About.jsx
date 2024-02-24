import React, { useState } from 'react';
import './About.css'

const About = () => {
  // Sample developer profiles
  const developers = [
    {
      name: "Abhishek Peravali",
      role: "Full Stack Developer",
      bio: "Experienced Full Stack Developer proficient in modern web technologies, adept at building robust and scalable applications from front to back end.",
      imageUrl: "src/assets/abhishek.png", // Replace with actual image file
    },
    {
      name: "Aparna Mishra",
      role: "FrontEnd Developer",
      bio: "Passionate Frontend Developer with expertise in crafting intuitive user interfaces and delightful user experiences using HTML, CSS, and JavaScript frameworks.",
      imageUrl: "src/assets/aparna.png", // Replace with actual image file
    },
    {
      name: "Chiruvella Aditya",
      role: "GenAI Developer",
      bio: "Innovative GenAI Developer harnessing the power of artificial intelligence to create intelligent solutions that solve complex problems and drive business innovation.",
      imageUrl: "src/assets/aditya.png", // Replace with actual image file
    },
    {
      name: "Balavva Mirji",
      role: "Devops Engineer",
      bio: "Seasoned DevOps Engineer specializing in automating infrastructure, streamlining workflows, and optimizing deployment pipelines for efficient software delivery.",
      imageUrl: "src/assets/balavva.png", // Replace with actual image file
    },
    {
      name: "Deep Gupta",
      role: "Python Developer",
      bio: "Skilled Python Developer with a focus on developing efficient, maintainable, and scalable Python applications, leveraging the power of the language's rich ecosystem and libraries.",
      imageUrl: "src/assets/deep.png", // Replace with actual image file
    },
    {
      name: "Lahari Tummalapalli",
      role: "Backend Developer",
      bio: "Proficient Backend Developer experienced in designing and implementing scalable, high-performance server-side applications using languages like Python, Java, or Node.js.",
      imageUrl: "src/assets/lahari.png", // Replace with actual image file
    },
    {
      name: "Raksha",
      role: "Backend Developer",
      bio: "Seasoned Backend Developer skilled in designing and implementing scalable, high-performance server-side applications. Proficient in crafting robust APIs, optimizing database queries, and ensuring the reliability and security of backend systems. Experienced in languages like Python, Java, or Node.js, with a focus on building efficient and maintainable codebases to support complex business logic.",
      imageUrl: "src/assets/raksha.png", // Replace with actual image file
    }
  ];

  const [showFullBio, setShowFullBio] = useState(false);

  // Function to toggle showing full bio
  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <div className="about-page">
      <div className="header">
        <h2>About Us</h2>
        <p>Welcome to our team! Meet our talented developers:</p>
      </div>
      <div className="developer-profiles">
        {developers.map((developer, index) => (
          <div key={index} className="developer-profile">
            <img src={developer.imageUrl} alt={developer.name} className="profile-image" />
            <h3>{developer.name}</h3>
            <p>{developer.role}</p>
            <p>{showFullBio ? developer.bio : developer.bio.slice(0, 100)} 
              {developer.bio.length > 100 && (
                <span className="read-more" onClick={toggleBio}>
                  {showFullBio ? " ...read less" : " ...read more"}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
