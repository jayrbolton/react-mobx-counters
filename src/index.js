import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import {CounterList, CounterListState} from './CounterList';

const state = new CounterListState();
const node = React.createElement(observer(CounterList), {state});
const container = document.getElementById('root');
ReactDOM.render(node, container);
