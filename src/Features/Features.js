import React, { Component } from "react";
//import './Features.css';
import FeatureList from "../FeatureList/FeatureList";
//import slugify from "slugify";


class Features extends Component {

    render() {


        return (
            <div className="container">
                <div className="FeatureList_heading">
                    <h1>Customize your laptop</h1>
                </div>
            
                <div className="feature__item">

                    
                    {Object.keys(this.props.features).map((feature, idx) => (
                        <FeatureList
                            key= {idx}
                            updateFeature= {this.props.updateFeature}
                            feature= {feature}
                            featureHash = {feature + '-' + idx}
                            features={this.props.features}
                            selected = {this.props.selected}

                        />
                    ))}
                </div>
                
            </div>
        );
        
    }
 
}
Features.defaultProps = {
  features: [],
};
export default Features;

