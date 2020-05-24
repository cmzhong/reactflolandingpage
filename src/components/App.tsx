import React, { Component } from "react";
import NavBar from './NavBar';
import Hero from './Hero';
import Features from './Features';
import Team from './Team';

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
        <Team />
      </div>
    )
  }
}

export default App;