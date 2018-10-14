import React, { Component } from "react";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Movies />
      </main>
    );
  }
}

export default App;
