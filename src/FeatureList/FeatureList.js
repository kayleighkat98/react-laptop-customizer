import React, { Component } from "react";
import "./FeatureList.css";
import FeatureItem from "../FeatureItem/FeatureItem";
import slugify from "slugify";

class FeatureList extends Component {
  render() {
    // console.log(this.props.feature)

  
    // const featureHash = feature + '-' + idx;
    // const options = this.props.features[feature].map(item => {<FeatureGroup/>

    return (
      <div className="Container">
        <div className="FeatureList_body">
          <FeatureItem 
            features={this.props.features}
            feature={this.props.feature}
            costs= {this.props.options.map((item)=>(item.cost))}
            names= {this.props.options.map((item)=>(item.name))}
          />
        </div>
      </div>
    );
  }
}

export default FeatureList;
