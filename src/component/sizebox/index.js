import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { ADD_GOODS, ADD_S_SIZE, ADD_M_SIZE, ADD_L_SIZE } from '../../store/actionType';

class SizeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: ''
        };
    }

    render() {
        return (
            <div className="SizeBox">
                <p>
                    SIZE<span className="mark">*</span><span className="sizeName">{this.state.size}</span>
                </p>
                <ul onClick={this.chooseSize}>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                </ul>
                <button onClick={this.addToCart}>ADD TO CART</button>
            </div>
        )
    }

    chooseSize = (ev) => {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() === 'li') {
            this.setState({
                size: target.innerHTML
            })
        }
    }

    addToCart = () => {
        const dispatch = useDispatch();
        var sText = this.state.size;
        if (sText) {
            const goodsArr = localStorage.getItem('goodsArr') ? JSON.parse(localStorage.getItem('goodsArr')) : [];
            goodsArr.push({
                name: 'Classic Tee',
                prize: 75,
                size: this.state.size
            })
            localStorage.setItem('goodsArr', JSON.stringify(goodsArr));
            let type;
            switch (this.state.size) {
                case 'S':
                    type = ADD_S_SIZE;
                    break;
                case 'M':
                    type = ADD_M_SIZE;
                    break;
                case 'L':
                    type = ADD_L_SIZE;
                    break;
            }
            dispatch({
                type: ADD_GOODS
            })
            dispatch({
                type
            })
            this.setState({
                size: ''
            })
        }
    }
}

export default SizeBox;