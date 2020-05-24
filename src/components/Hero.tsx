import React from "react";
import { AiOutlineChrome } from 'react-icons/ai';

function Hero() {
  return (
    <section id="hero">
    <div>
    <img id="heroImage"
        className="animate__animated animate__fadeInDown"
        src="reactb.png"
        alt="reactflo-logo"
      />
    </div>
    <div id="heroLine" className="animate__animated animate__fadeInUp">
    <h2>A React State Visualization Tool</h2>
    <p>A Chrome DevTool built for developers to visualize the flow of state throughout their application.</p>
    <button>
      <AiOutlineChrome size={36}/> Add To Chrome
    </button>
    </div>
  </section>
  )
}

export default Hero;