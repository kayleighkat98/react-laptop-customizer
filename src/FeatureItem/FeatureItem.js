import React, { Component } from 'react';
import './FeatureItem.css';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });


class FeatureItem extends Component {




    render() {


        return(
            
                <div className="feature__item">
                    <input
                        type="radio"
                        id={this.props.itemHash}
                        className="feature__option"
                        name={slugify(this.props.feature)}
                        checked={this.props.item.name === this.props.selected[this.props.feature].name}
                        onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
                    />
                    <label htmlFor={this.props.itemHash} className="feature__label">
                        {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
                    </label>
                </div>
        );
    }
}

export default FeatureItem;

