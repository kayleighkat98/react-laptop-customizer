import React, { Component } from "react";
import "./FeatureList.css";
import FeatureItem from "../FeatureItem/FeatureItem";
import slugify from "slugify";

class FeatureList extends Component {
  render() {
 
    // const featureHash = feature + '-' + idx;
    // const options = this.props.features[feature].map(item => {<FeatureGroup/>

    return (
      <div className="Container">
        <div className="FeatureList_body">
          <form className="main__form">

            <FeatureItem 
              features={this.props.features}
              feature = {this.props.feature}
              type={this.props.type}
              id={this.props.id}
              className={this.props.className}
              name={this.props.name}
              checked={this.props.checked}
              onChange={this.props.onChange}
              
            />
          </form>
        </div>
      </div>
    );
  }
}

export default FeatureList;
