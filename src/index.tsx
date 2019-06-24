import * as React from "react";
import { render } from "react-dom";
import Sound from "react-sound";
import "./styles.css";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      playStatus: 'PLAYING',
      animation: "bounce animated"
    };
  }
  render() {
    return (
        <div className="App">
          <h1>La boite à Henri</h1>
          <p>ça fait fuir les chiens</p>
          <img
            onClick={evt => this.play()}
            className={this.state.animation}
            src="henri.png"
            alt="visage"
          />
          <Sound url="rire.mp3" playStatus={this.state.playStatus} />
        </div>
    );
  }

  play() {
    let animation =
      this.state.animation === "bounce animated" ? "wobble animated" : "bounce animated";
    this.setState({
      animation: animation,
      playStatus: 'PLAYING',
    });
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
