import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {remaining: this.props.seconds};
  }

  countDown() {
    if(this.state.remaining > 0) {
      this.setState((prevState) => ({
        remaining : prevState.remaining - 1
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.countDown(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.state.remaining} seconds remaining.</h2>
      </div>
    );
  }
}

export default Timer;
