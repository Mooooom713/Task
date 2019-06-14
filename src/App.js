import React from 'react';
import './App.css';
import Header from './component/header';
import ImageBox from './component/imagebox';
import Description from './component/description/index'
import SizeBox from './component/sizebox/index'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="sectionWrap">
          <ImageBox />
          <div className="rightSide">
          <Description />
          <SizeBox />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
