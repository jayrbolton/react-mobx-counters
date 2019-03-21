import PropTypes from 'prop-types';
import React from 'react';
import {observable, action} from 'mobx';

// Components
import Button from './Button';

export class CounterState {
  constructor (initial) {
    if (initial) {
      this.count = initial;
    }
  }

  @observable count = 0;

  @action
  add(n) {
    this.count += n;
  }
}

export function Counter({state}) {
  return (
    <div>
      Count is { state.count }
      <Button txt='Increment' onClick={() => state.add(1)} />
      <Button txt='Decrement' onClick={() => state.add(-1)} />
    </div>
  );
}

Counter.propTypes = { state: PropTypes.object }
