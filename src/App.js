import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>My Cart({})</button>
      </header>
      <section>
        <div>
          <img src={require('./asset/classic-tee.jpg')} alt='Cloth'/>
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
        <button></button>
      </section>
    </div>
  );
}

export default App;
