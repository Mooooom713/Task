import React from 'react';
import { useSelector } from 'react-redux';

const CartToast = (props) => {
  const { isClick } = useSelector(state => state);
  const list = localStorage.goodsArr;
  const mapArr = [];
  list.forEach((item, index) => {
  });
  return (<div>
    <ul>
      {
        list.map((item) => {
          return (<li>
            <img src={require('../../asset/classic-tee.jpg')} alt='Cloth'/>
            <div>
              <p>item.name</p>
              <p></p>
              <p></p>
            </div>
          </li>);
        })
      }
    </ul>
  </div>);
}

export default CartToast;