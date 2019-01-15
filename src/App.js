import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Tickets from './components/tickets'

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
        <div>
          <Navigation />
          <h2> Ticket Master</h2>
          <Tickets />
          <Footer />

        </div>
    );
  }
}

export default App;
