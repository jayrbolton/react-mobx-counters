import PropTypes from 'prop-types';
import React from 'react';
import {observable, action} from 'mobx';

// Components
import {Counter, CounterState} from './Counter';
import Button from './Button';

export class CounterListState {
  // We start with an empty array of counters
  @observable counters = [];

  // Starting count for new counters
  @observable startingCount = 1;

  // Append a counter state and id to the counters array
  @action
  addCounter() {
    this.counters.push({
      id: String(Math.random() * 1000000),
      state: new CounterState(this.startingCount),
    });
  }

  // Remove a single counter by id
  @action
  removeCounter(id) {
    this.counters = this.counters.filter((c) => c.id !== id);
  }

  // Increment every single counter by 1
  @action
  incrementAll() {
    this.counters.forEach((c) => {
      c.state.add(1);
    });
  }

  // Set the starting count value for new counters
  @action
  setStartingCount(ev) {
    const count = Number(ev.currentTarget.value);
    this.startingCount = count;
  }
}

// Get the total sum of all counters in an array
function getTotal(counters) {
  return counters.reduce((sum, c) => sum + c.state.count, 0);
}

export function CounterList({state}) {
  return (
    <div>
      <p> Total is { getTotal(state.counters) } </p>
      {/* Button to append a new counter to the page. */}
      <fieldset className='ba0'>
        <label>Starting count</label>
        <input
          type='number'
          step='1'
          value={state.startingCount}
          onInput={(ev) => state.setStartingCount(ev)}
          />
      </fieldset>
      <Button txt="New counter" onClick={() => state.addCounter()} />
      {/* Button to increment all counters on the page by 1. */}
      <Button txt="Increment all" onClick={() => state.incrementAll()} disabled={!state.counters.length} />

      {/*
         For each counter object in the props.counters array:
           - wrap each in a div with its `key` set to the id
           - render the counter's react component with props in the props
           - append a remove button to the end of the counter
      */}
      <div>{
        state.counters.map((counter) =>
          <div key={counter.id}>
            <Counter state={counter.state} />
            <Button txt="Remove this counter" onClick={() => state.removeCounter(counter.id)} />
            <hr />
          </div>
        )
      }</div>
    </div>
  );
}

CounterList.propTypes = { state: PropTypes.object }
