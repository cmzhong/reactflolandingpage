import React from "react";

const Features = () => {
  return (
    <section id="features">
      <h1 id="featureHeader">Features</h1>
      <div id="featuresBody">
        <ul id="featuresList">
          <li>Visualize Component Hierarchy</li>
          <li>Track Flow of State</li>
          <li>Track Flow of Props</li>
        </ul>
        <img id="featuresImage"
          src="features.png"
          alt="features-image"
        />
      </div>
    </section>
  )
}

export default Features;