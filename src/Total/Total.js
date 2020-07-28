import React, { Component } from "react";
import "./Total.css";
import TotalList from "../TotalList/TotalList";
import TotalCost from "../TotalCost/TotalCost";

class Total extends Component {
  render() {
    let total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );
    console.log(this.total)
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
        <TotalCost 
          total = {total}
        />
      </div>
    );
  }
}

export default Total;
