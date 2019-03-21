import React from 'react';


function Counter ({count, add}) {
  return (
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
}

export default Counter;
