import React from "react";

const Features = () => {
  return (
    <section id="features">
      <h1 id="featureHeader">Features</h1>
      <div id="featuresBody">
        <ul className="animate__animated animate__fadeInLeft" id="featuresList">
          <li>Visualize Component Hierarchy</li>
          <li>Track Flow of State</li>
          <li>Track Flow of Props</li>
        </ul>
        <img className="animate__animated animate__fadeInRight"
          id="featuresImage"
          src="features.png"
          alt="features-image"
        />
      </div>
    </section>
  )
}

export default Features;