import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

// Components
import Counter from './Counter';

class State {
  @observable counters = [];

  addCounter() {
    this.counters.push({
      id: String(Math.random() * 1000000),
      state: new Counter.State(),
    });
  }

  removeCounter(id) {
    this.counters = this.counters.filter((c) => c.id !== id);
  }
}

@observer
class Component extends React.Component {
  render() {
    const state = this.props.state;
    const total = state.counters.reduce((sum, c) => sum + c.state.count, 0);
    return (
      <div>
        <p> Total is { total } </p>
        <button className='ml3' onClick={() => state.addCounter()}>
          New counter
        </button>

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

        <div> </div>
      </div>
    );
  }
}

export default {State, Component};
