import React, { Component } from 'react'
import './TotalCost.css';
//import  from './';

class TotalCost extends Component {

    render() {
        return(
            <div className='container'>
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                       <p>$12</p> {/* {USCurrencyFormat.format(total)} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default TotalCost;