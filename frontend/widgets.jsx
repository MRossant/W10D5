import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const panes = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second pane here' },
  { title: 'three', content: 'Third pane here' },
];

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Clock/>, root);
  ReactDOM.render(<Tabs tabs={panes}/>, root);
});
