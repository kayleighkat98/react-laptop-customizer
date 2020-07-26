import React, { Component } from 'react'
import './FeatureGroup.css';
import FeatureItem from '../FeatureItem/FeatureItem';

class FeatureGroup extends Component {

    render() {
        


        return(
            <div className='container'>

                <input
                    type="radio"
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.name === this.state.selected[feature].name}
                    onChange={e => this.updateFeature(feature, item)}
                />
               <FeatureItem/>
            </div>
        );
    }

}

export default FeatureGroup;