import React, { Component } from "react";
//import './Features.css';
import FeatureList from "../FeatureList/FeatureList";
// import slugify from "slugify";


class Features extends Component {

    render() {
        console.log(this.props.cost)
        return (
        <div className="container">
        <h3>{this.props.feature}</h3>
        
            <div key={this.props.itemHash} className="feature__item">


                    <FeatureList
                        feature = {this.props.feature}
                        type="radio"
                        id={this.props.options.itemHash}
                        className="feature__option"
                        name={this.props.options.name}
                        checked={this.props.options.name === this.state.selected[this.state.feature].name}
                        onChange={e => this.props.updateFeature}
                    />
                

                {/* <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.feature.name} ({USCurrencyFormat.format(this.props.feature.cost)})
                </label> */}
          </div>
               
        </div>
        );
        
    }
 
}
Features.defaultProps = {
  features: [],
};
export default Features;
// // const features = Object.keys(this.props.features).map((feature, idx) => {
// //     const featureHash = feature + '-' + idx;
// // });


