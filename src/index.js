import React from 'react';
import ReactDOM from 'react-dom';

// function Greeting(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!!</h1>
  }
}

const element = <Greeting name="Tom"/>

ReactDOM.render(
  element,
  document.getElementById('root')
);
