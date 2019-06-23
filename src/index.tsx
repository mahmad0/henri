import * as React from "react";
import { render } from "react-dom";
import Sound from "react-sound";
import Radium, { StyleRoot } from "radium";
import { wobble, bounce } from "react-animations";
import "./styles.css";

const styles = {
  wobble: {
    animation: "1s",
    animationName: Radium.keyframes(wobble, "wobble")
  },
  nothing: {
    animation: "1s",
    animationName: Radium.keyframes(bounce, "bounce")
  }
};

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      playStatus: Sound.status.PLAYING,
      animation: styles.nothing
    };
  }
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <h1>La boite à Henri</h1>
          <p>ça fait fuir les chiens</p>
          <img
            onClick={evt => this.play()}
            className="face"
            style={this.state.animation}
            src="henri.png"
            alt="visage"
          />
          <Sound url="rire.mp3" playStatus={this.state.playStatus} />
        </div>
      </StyleRoot>
    );
  }

  play() {
    let animation =
      this.state.animation === styles.wobble ? styles.nothing : styles.wobble;
    this.setState({
      animation: animation,
      playStatus: Sound.status.PLAYING
    });
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
