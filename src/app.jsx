/*
import React from "react";

const App = () => {
  return (
    <>
      <h1> Hello World </h1>
    </>
  );
};

export default App;
*/

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "How are you?",
      hasLoaded: false,
    };
  }

  handleEvent = (text) => {this.setState({ text });
};

  handleClick = () => { this.setState({ hasLoaded: !this.state.hasLoaded }); 
};

  componentDidMount = () => {
    this.setState({ hasLoaded: true });
  };

  render() {
  if (this.state.hasLoaded === true) {
  return (
   <>
    <h1>
    {" Ebtesam "} Hello there, {this.props.name}. {this.state.text}!</h1>
    <input placeholder={this.state.text} value={this.state.text} onChange={(event) => this.handleEvent(event.target.value)} />
     <button value={this.state.hasLoaded} onClick={this.handleClick}> click me to load </button>
   </>
      );
   } else {
   return (
   <>
     <h1> Loading...</h1>
    <button value={this.state.hasLoaded} onClick={this.handleClick}> Click me </button>
   </>
      );
    }
  }
}

export default App;
