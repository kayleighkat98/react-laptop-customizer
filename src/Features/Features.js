import React, { Component } from "react";

import FeatureList from "../FeatureList/FeatureList";



class Features extends Component {

    render() {


        return (
            <>  <form className="main__form">
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
                
            </form>     </>    
        );
        
    }
 
}
Features.defaultProps = {
  features: [],
};
export default Features;

