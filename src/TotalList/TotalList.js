import React, { Component } from 'react'
import './TotalList.css';
import TotalItem from '../TotalItem/TotalItem';
import TotalCost from "../TotalCost/TotalCost";

class TotalList extends Component {

    render() {
        let total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
        return(
            <div className='container'>               
                
                
                {Object.keys(this.props.selected).map((feature, idy) => (
                    <TotalItem
                        key={idy+'c'}
                        feature= {feature}
                        featureHash = {feature + '-' + idy}
                        selectedOption = {this.props.selected[feature]}
                    
                    />
                ))}                                                    
                <TotalCost 
                    total = {total}
                />
            </div>
            
        );
    }
}

export default TotalList;