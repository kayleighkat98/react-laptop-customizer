import React, { Component } from 'react'
import './FeatureList.css';
import FeatureGroup from '../FeatureGroup/FeatureGroup';

class FeatureList extends Component {


    render() {

        // const featureHash = feature + '-' + idx;
        // const options = this.props.features[feature].map(item => {<FeatureGroup/>

        return(
            <div className="Container">
                <div className="FeatureList_body">
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    <FeatureGroup/> 
                </form>

                </div>
            </div>
        );
    }
}

export default FeatureList;