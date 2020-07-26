import React, { Component } from 'react'
//import './Features.css';
import FeatureList from '../FeatureList/FeatureList';

class Features extends Component {

    render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
    });

        return(
            <div className='container'>
                <div className="FeatureList_heading">
                    <h1>Customize your laptop</h1>
                </div>
                <FeatureList
                     features = {this.props.features}
                />
            </div>
        );
    }
}
Features.defaultProps={
    features : []
};
export default Features;