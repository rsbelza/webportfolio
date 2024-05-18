import React from 'react';

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="./img/about-me.jpg"
          alt="About Me"
          style={{ borderRadius: '50%' }}
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            An engineering graduate from Siena College Taytay, with a passion for software development. My journey into the tech world began in college, where I developed a strong foundation in engineering principles and problem-solving skills.
          </p>
          
          <p className="hero--section-description">
            My goal is to continuously learn and grow as a software engineer. I am particularly interested in web development, data structures, and algorithms. I am always eager to take on new challenges and contribute to exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
}