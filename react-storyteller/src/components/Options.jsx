import React, { Component } from "react";

export default class Storyteller extends Component {
  /* ================= Constructor ================== */

  constructor(props) {
    super(props);
    this.state = {};
  }

  /* ================= Render ================= */

  render() {
    const { methods, options, idN } = this.props;
    let buttonA, buttonB;

    if (idN <= 4) {
      buttonA = (
        <button className="A" onClick={methods.a}>
          {options.a}
        </button>
      );

      buttonB = (
        <button className="B" onClick={methods.b}>
          {options.b}
        </button>
      );
    } else {
      buttonA = (
        <button className="A" onClick={methods.reset}>
          ¿Lo volvemos a intentar?
        </button>
      );
    }

    return (
      <div className="buttons">
        {buttonA}
        {buttonB}
      </div>
    );
  }
}
