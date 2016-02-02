import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';
import './../style.css';

var StockPicker = React.createClass({
  render() {
    return (
      <p>Hello!</p>
    )
  }
});

ReactDOM.render(<StockPicker />, document.querySelector('#main'));
