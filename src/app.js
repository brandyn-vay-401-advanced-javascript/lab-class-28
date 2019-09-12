import React from "react";

import "./styles.css";

import Message from "./components/message.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  sayit = string => {
    this.setState({ input: string });
  };

  render() {
    return (
      <Message
        title="This is my title"
        text="I like to draw things that look cute"
        action={this.sayIt}
        input={this.state.input}
      />
    );
  }
}

export default App;
