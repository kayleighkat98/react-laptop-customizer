import React, { Component } from "react";
import "./Total.css";
import TotalList from "../TotalList/TotalList";


class Total extends Component {
  render() {

    return (

      <section className="main__summary"> 
        <h2>Your cart</h2>
        <TotalList 
          selected = {this.props.selected}
          features = {this.props.features}
        />
      </section>


    );
  }
}

export default Total;
