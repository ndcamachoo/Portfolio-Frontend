import React, { Component } from "react";
import Options from "./Options";
import Stats from "./Stats";
import Story from "../assets/data.json";

export default class Storyteller extends Component {
  /* ============= Constructor =========== */

  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      option: "1",
      optionBuffer: [],
      animation: ""
    };
  }

  /* ============= Lifecycle =============== */

  componentDidUpdate = (prevProps, prevState) => {
    const { id, option, optionBuffer } = this.state;

    if (prevState.id !== id && id <= 5) {
      optionBuffer.push(option.substr(1).toUpperCase());
    }
  };

  /* ============= Metodos ==============  */

  handleOptionA = () => {
    const { id } = this.state;

    if (id < 5) {
      this.setState({
        id: id + 1,
        option: id + 1 + "a",
        animation: "animation"
      });
    }
  };

  handleOptionB = () => {
    const { id } = this.state;

    if (id < 5) {
      this.setState({
        id: id + 1,
        option: id + 1 + "b",
        animation: "animation"
      });
    }
  };

  handleReset = () => {
    this.setState({
      id: 1,
      option: "1",
      optionBuffer: []
    });
  };

  onAnimationEnd = () => {
    this.setState({
      animation: ""
    });
  };

  /* ============= Render ============  */

  render() {
    const { option, optionBuffer, animation, id } = this.state;
    const fileteredStory = Story.find((el) => el.id.includes(option));
    const methods = {
      a: this.handleOptionA,
      b: this.handleOptionB,
      reset: this.handleReset
    };

    return (
      <main>
        <section className="story">
          <Stats
            prevOption={option.substr(1).toUpperCase()}
            history={optionBuffer}
          />
          <h1 className={animation} onAnimationEnd={this.onAnimationEnd}>
            {fileteredStory.historia}
          </h1>
          <Options
            methods={methods}
            options={fileteredStory.opciones}
            idN={id}
          />
        </section>
      </main>
    );
  }
}
