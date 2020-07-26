import React, { Component } from 'react'
import './TotalList.css';
import TotalItem from '../TotalItem/TotalItem';

class TotalList extends Component {

    render() {
        return(
            <div className='container'>
                <TotalItem/>
            </div>
        );
    }
}

export default TotalList;