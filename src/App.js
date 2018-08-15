import React, { Component } from "react";
import Contact from './components/Contact';
import Header from './components/Header';
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="Dariusz Franczak" email="darius32@op.pl" phone="07707636696" />
      </div>
    );
  }
}


export default App;
