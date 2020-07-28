import React, { Component } from "react";
import "./FeatureList.css";
import FeatureItem from "../FeatureItem/FeatureItem";
import slugify from "slugify";


class FeatureList extends Component {
  render() {
  
    return (
      <fieldset className="feature" >
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        
        {this.props.features[this.props.feature].map((item,idz) => (
           <FeatureItem
            idz = {idz+'b'}
            key={idz}
            item= {item}
            itemHash = {slugify(JSON.stringify(item))}
            options = {this.props.options}
            feature= {this.props.feature}
            updateFeature= {this.props.updateFeature}
            selected = {this.props.selected}
          />
        ))}
            
      </fieldset>
    );
    // itemName = item)(
    //   itemHash = slugify(JSON.stringify(itemName))
  
  }
}

export default FeatureList;
