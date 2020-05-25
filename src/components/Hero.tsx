import React from "react";
import { AiOutlineChrome } from 'react-icons/ai';
import ReactLogo from '../../images/reactw.png';

function Hero() {
  return (
    <div id="landingpage">
      <div className="heroWaves">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style={{ backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-top.png')` }}></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style={{ backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')` }}></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style={{ backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')` }}></div>
          </div>
        </div>
      </div>
      <section id="hero">
        <img id="heroImage"
          className="animate__animated animate__fadeInDown"
          src={ReactLogo}
          alt="reactflo-logo"
        />
        <div id="heroLine" className="animate__animated animate__fadeInUp">
          <h2>A React State Visualization Tool</h2>
          <p>A Chrome DevTool built for developers to visualize the flow of state throughout their application.</p>
          <button id="heroButton">
            <AiOutlineChrome size={36} /> Add To Chrome
        </button>
        </div>
      </section>
    </div>
  )
}

export default Hero;