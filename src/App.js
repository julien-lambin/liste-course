import React, { Component } from "react";
import "./App.css";
import ListeArticles from "./Components/ListeArticles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListeArticles />
      </div>
    );
  }
}

export default App;
