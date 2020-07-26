import React, { Component } from 'react';
import './FeatureItem.css';
import slugify from 'slugify';


class FeatureItem extends Component {
    render() {

        return(
            <div className='Container'>
                
                <fieldset className="feature" key={featureHash}>
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