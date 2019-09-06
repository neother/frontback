import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Records from './component/Records';
import NameForm from './component/NameForm';


ReactDOM.render(<Records />, document.getElementById('root'));
ReactDOM.render(<NameForm />, document.getElementById('input'));
// ReactDOM.render(<input value="hi" />, mountNode);

// setTimeout(function() {
//   ReactDOM.render(<input value={null} />, mountNode);
// }, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

