

import React, { Component } from 'react';
import './App.css';
import Features from '../Features/Features';
import Total from '../Total/Total'
import STORE  from '../STORE'

                      
class App extends Component {

  state = {
      features: {STORE},
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
      
    };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  render() {
    console.log(STORE)

    return(
      <div className="App">

        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>

        <main>
 
            <Features
              selected = {this.state.selected}
              features = {this.state.features.STORE}
              updateFeature= {this.updateFeature}
            />
          

            <Total
              selected = {this.state.selected}
              features = {this.state.features.STORE}
            />
         
        
        </main>

      </div>
    );
  }
}

export default App
