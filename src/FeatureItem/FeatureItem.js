import React, { Component } from 'react';
import './FeatureItem.css';
// import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
class FeatureItem extends Component {
    render() {

        return(
            <div className='Container'>
                <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.feature.name} ({USCurrencyFormat.format(this.props.feature.cost)})
                </label>
                <fieldset className="feature" key={this.props.featureHash}>
                    <legend className="feature__name">
                        <h3>{this.props.feature}</h3>
                    </legend>
                    {this.props.options}
                </fieldset>

            </div>
        );
    }
}

export default FeatureItem;