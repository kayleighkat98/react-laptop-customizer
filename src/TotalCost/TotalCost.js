import React, { Component } from 'react'
import './TotalCost.css';
//import  from './';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
  
class TotalCost extends Component {

    render() {

        return(
            <div className='container'>
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(this.props.total)}
                    </div>
                </div>
            </div>
        );
    }
}

export default TotalCost;