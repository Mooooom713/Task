import React, { Component } from 'react';
import './index.css';

class SizeBox extends Component {
    render() {
        return (
            <div className="SizeBox">
                <p>
                    SIZE<span className="mark">*</span><span></span>
                </p>
                <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                </ul>
                <button>ADD TO CHART</button>
            </div>
        )
    }
}

export default SizeBox;