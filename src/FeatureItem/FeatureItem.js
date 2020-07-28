import React, { Component } from 'react';
import './FeatureItem.css';
// import slugify from 'slugify';

// const USCurrencyFormat = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   });


class FeatureItem extends Component {
    render() {
        const testArr =((Object.keys(this.props.feature)).map( (x,i) => {
            let costsCopy = [...this.props.costs];
            let namesCopy = [...this.props.names];
            let item =[x];
            item.push(namesCopy[i]+costsCopy[i]);
            return {item}
                
            
        }));
        // console.log(this.props.names)
        // console.log(this.props.costs)
        // const testArr =(Object.keys(this.props.feature).map( (i,x) => {
            
        //     const item =[];
        //     item[i].push(this.props.names[i]+this.props.costs[x]);
        //     return (item)
                
            
        // }));

console.log(testArr)
        return(
            <div className='Container'>
                {/* <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.feature.name} ({USCurrencyFormat.format(this.props.feature.cost)})
                </label>
                <fieldset className="feature" key={this.props.featureHash}>
                    <legend className="feature__name">
                        <h3>{this.props.feature}</h3>
                    </legend>
                    {this.props.options}
                </fieldset> */}

            </div>
        );
    }
}

export default FeatureItem;