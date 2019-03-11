import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

class State {
  @observable count = 0;

  add(n) {
    this.count += n;
  }
}

@observer
class Component extends React.Component {
  render() {
    const state = this.props.state;
    return (
      <div>
        Count is { state.count }
        <button className='ml3' onClick={() => state.add(1)}>
          Increment
        </button>
        <button className='ml3' onClick={() => state.add(-1)}>
          Decrement
        </button>
      </div>
    );
  }
}

export default {State, Component};
