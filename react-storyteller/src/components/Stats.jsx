import React, { Component } from "react";

export default class Storyteller extends Component {
  /* ================ Constructor ================== */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* =============== Render ===================  */

  render() {
    return (
      <div className="Stats">
        <h3>Selección previa: </h3>
        <p>{this.props.prevOption}</p>
        <h3>Historial: </h3>
        <ul>
          {this.props.history.map((el, idx) => {
            return <li key={idx}> {el}</li>;
          })}
        </ul>
      </div>
    );
  }
}
