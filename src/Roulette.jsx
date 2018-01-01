import React from 'react';

export default class Roulette extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 1,
      isStart: false,
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  shuffle(){
    var rand = Math.floor(Math.random() * 30) + 1;
    this.setState({number: rand});
  }

  startRoulette() {
    this.interval = setInterval(() => this.shuffle(), 50);
  }

  stopRoulette() {
    clearInterval(this.interval);
  }

  toggleButton() {
    if(this.state.isStart) {
      this.stopRoulette();
    } else {
      this.startRoulette();
    }
    this.setState((prevState) => ({
      isStart: !prevState.isStart
    }));
  }

  render() {
    return(
      <div>
        <p>number: {this.state.number}</p>
        <button onClick={this.toggleButton}>
          {this.state.isStart ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

