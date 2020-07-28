import React, { Component } from "react";
import "./Total.css";
import TotalList from "../TotalList/TotalList";
import TotalCost from "../TotalCost/TotalCost";

class Total extends Component {
  render() {

    
    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //     const featureHash = feature + '-' + idx;
    //     const selectedOption = this.state.selected[feature];
  
    
    // });
    return (
      <div className="container">
        {/* <div className="summary__option" >
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div> */}
        <h2>Your cart</h2>
        <TotalList />
        <TotalCost />
      </div>
    );
  }
}

export default Total;
