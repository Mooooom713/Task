import React from 'react';
import './App.css';
import Header from './component/header';
import ImageBox from './component/imagebox';
import Description from './component/description/index'
import SizeBox from './component/sizebox/index'

function App() {
  return (
    <div className="App">
      <Header count="4"/>
      <div className="sectionWrap">
        <ImageBox/>
        <div className="rightSide">
        <Description />
        <SizeBox />
        </div>
      </div>
    </div>
  );
}

export default App;
