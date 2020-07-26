import React, { Component } from 'react'
import './Total.css';
import TotalList from '../TotalList/TotalList';
import TotalCost from '../TotalCost/TotalCost';

class Total extends Component {

    render() {
        return(
            <div className='container'>
                <h2>Your cart</h2>
                <TotalList/>
                <TotalCost/>
            </div>
        );
    }
}

export default Total;