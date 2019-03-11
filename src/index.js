import React from 'react';
import ReactDOM from 'react-dom';
import CounterList from './CounterList';

const state = new CounterList.State();
const node = React.createElement(CounterList.Component, {state});
const container = document.getElementById('root');
ReactDOM.render(node, container);
