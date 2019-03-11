import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

// Components
import Counter from './Counter';

class State {
  // We start with an empty array of counters
  @observable counters = [];

  // Append a counter state and id to the counters array
  addCounter() {
    this.counters.push({
      id: String(Math.random() * 1000000),
      state: new Counter.State(),
    });
  }

  // Remove a single counter by id
  removeCounter(id) {
    this.counters = this.counters.filter((c) => c.id !== id);
  }

  // Increment every single counter by 1
  incrementAll() {
    this.counters.forEach((c) => {
      c.state.add(1);
    });
  }
}

@observer
class Component extends React.Component {
  render() {
    // state should be an instance of the State class above
    const state = this.props.state;
    const total = state.counters.reduce((sum, c) => sum + c.state.count, 0);
    return (
      <div>
        <p> Total is { total } </p>
        {/* Button to append a new counter to the page. */}
        <button className='ml3' onClick={() => state.addCounter()}>
          New counter
        </button>
        {/* Button to increment all counters on the page by 1. */}
        <button
          onClick={() => state.incrementAll()}
          disabled={!state.counters.length}>
          Increment all
        </button>

        {/*
           For each counter object in the state.counters array:
             - wrap each in a div with its `key` set to the id
             - render the counter's react component with state in the props
             - append a remove button to the end of the counter
        */}
        <div>{
          state.counters.map((counter) =>
            <div key={counter.id}>
              <Counter.Component state={ counter.state } />
              <button onClick={() => state.removeCounter(counter.id)}>
                Remove this counter
              </button>
              <hr />
            </div>
          )
        }</div>
      </div>
    );
  }
}

export default {State, Component};
