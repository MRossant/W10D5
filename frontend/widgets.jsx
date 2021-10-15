import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const h1 = React.createElement('h1', null, ['React is working!']); //non-jsx method
  // const app = <App /> //if you were to use a variable instead of putting directly into ReactDOM.render
  ReactDOM.render(<Clock/>, root);
});
