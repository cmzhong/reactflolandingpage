import React, { Component } from "react";
import NavBar from './NavBar';
import Hero from './Hero';
import Features from './Features';
// import Demo from './Demo';
// import Team from './Team';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Features />
        {/* <Demo />
        <Team /> */}
      </div>
    )
  }
}

export default App;