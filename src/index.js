import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer.jsx';

const element = <Timer name="Filange" seconds={180} array={[1,2,3,4,5]} />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
