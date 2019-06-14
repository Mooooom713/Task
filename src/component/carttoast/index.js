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
  const { isClick, sizeCount } = useSelector(state => state);
  let styleName = isClick ? '' : ' toastActive';
  const sListContent = sizeCount.s > 0 ? aList(sizeCount.s, 'S') : null;
  const mListContent = sizeCount.m > 0 ? aList(sizeCount.m, 'M') : null;
  const lListContent = sizeCount.l > 0 ? aList(sizeCount.l, 'L') : null;
  styleName = sListContent || mListContent || lListContent ? styleName : ' toastActive';
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