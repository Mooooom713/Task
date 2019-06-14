import React from 'react';
import './style.css';

const Header = (props) => {
  return (<header className='header'>
    <div className="button-wrap">
      <button>My Cart({props.count})</button>
    </div>
  </header>);
}

export default Header;
