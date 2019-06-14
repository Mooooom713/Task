import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const aList = (count, size) => {
  return (<li>
      <img src={require('../../asset/classic-tee.jpg')} alt='Cloth'/>
      <div>
        <p>Classic Tee</p>
        <p>{count} x <span>$75.00</span></p>
        <p>Siez: {size}</p>
      </div>
    </li>);
}


const CartToast = (props) => {
  const { isClick, sCount, mCount, lCount } = useSelector(state => state);
  const styleName = isClick ? ' toastActive' : '';
  const sListContent = aList(sCount, 'S');
  const mListContent = aList(mCount, 'M');
  const lListContent = aList(lCount, 'L');
  return (<div className={`toastWrap${styleName}`}>
    <ul>
      {
        sListContent
      }
      {
        mListContent
      }
      {
        lListContent
      }
    </ul>
  </div>);
}

export default CartToast;