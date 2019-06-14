import React from 'react';
import './style.css';
import { useSelector, useDispatch  } from 'react-redux';
import { CLICK_BUTTON } from '../../store/actionType';

const Header = () => {
  const dispatch = useDispatch();
  const { count, isClick } = useSelector(state => state);
  const activeStyle = isClick ? 'active' : '';
  return (<header className='header'>
    <div className="button-wrap">
      <button
        className={activeStyle}
        onClick={() => dispatch({ type : CLICK_BUTTON})}>
        My Cart({count})
      </button>
    </div>
  </header>);
}


export default Header;
