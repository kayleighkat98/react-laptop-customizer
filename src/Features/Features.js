import React, { Component } from "react";
//import './Features.css';
import FeatureList from "../FeatureList/FeatureList";
// import slugify from "slugify";




  
  
  
  
  //     const summary = Object.keys(this.state.selected).map((feature, idx) => {
  //       const featureHash = feature + '-' + idx;
  //       const selectedOption = this.state.selected[feature];
  
  //       return (
  //         <div className="summary__option" key={featureHash}>
  //           <div className="summary__option__label">{feature} </div>
  //           <div className="summary__option__value">{selectedOption.name}</div>
  //           <div className="summary__option__cost">
  //             {USCurrencyFormat.format(selectedOption.cost)}
  //           </div>
  //         </div>
  //       );
  //     });





class Features extends Component {

    render() {

        return (
            <div className="container">
                <div className="FeatureList_heading">
                    <h1>Customize your laptop</h1>
                </div>
            
                <div className="feature__item">

                    {Object.keys(this.props.features).map((feature, idx,itemHash) => (
                        <FeatureList
                            key= {idx}
                            feature = {feature} 
                            featureHash = {feature + '-' + idx}
                            options = {this.props.features[feature].map((item) => (
                                item))}
                            selected= {this.props.selected}
                        />
                        
                    ))}
                
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
                   // type="radio"
                        // className="feature__option"
                        // /*find out what checked is trying to call */
                        // checked={this.props.options.name === this.props.selected[this.props.feature].name}//checked={item.name === this.state.selected[feature].name}
                        // onChange={e => this.props.updateFeature}


