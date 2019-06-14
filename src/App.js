import React from 'react';
import './App.css';
import Header from './component/header';
import ImageBox from './component/imagebox';

function App() {
  return (
    <div className="App">
      <Header count="4"/>
      <div className="sectionWrap">
        <ImageBox/>
      </div>
    </div>
  );
}

export default App;
