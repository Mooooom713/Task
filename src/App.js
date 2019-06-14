import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>My Cart({})</button>
      </header>
      <section>
        <div>
          <img src='./asset/classic-tee.jpg' alt='Cloth'/>
        </div>
      </section>
      <section>
        <h2>Classic Tee</h2>
        <p>$75.00</p>
        <p>

        </p>
        <p>
          SIZE<span>*</span>
        </p>
        <ul>
          <li>S</li>
          <li>M</li>
          <li>L</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
