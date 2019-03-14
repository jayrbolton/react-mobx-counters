import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

class State {
  @observable count = 0;

  add(n) {
    this.count += n;
  }
}

const Component = observer(({state}) =>
  // state should be an instance of the State class above
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

export default {State, Component};
