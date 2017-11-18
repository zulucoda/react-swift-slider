import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/react-swift-slider/Slider";

class App extends Component {
  render() {
    const data = [
      {
        id: "1",
        src: "https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30"
      },
      {
        id: "2",
        src: "https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30"
      },
      {
        id: "3",
        src: "https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30"
      },
      {
        id: "4",
        src: "https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30"
      },
      {
        id: "5",
        src: "https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30"
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Slider
          data={data}
          height={680}
          showDots={false}
          enableNextAndPrev={false}
        />
      </div>
    );
  }
}

export default App;
