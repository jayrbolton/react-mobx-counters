import ReactDOM from 'react-dom';
import CounterList from './CounterList';

const state = new CounterList.State();
const node = <CounterList.Component state={ state } />;
const container = document.getElementById('root');
ReactDOM.render(node, container);
