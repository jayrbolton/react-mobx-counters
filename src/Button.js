import PropTypes from 'prop-types';
import React from 'react';

// Styled button component
function Button (props) {
  return (
    <button
      className='ba bg-white'
      onClick={props.onClick}
      disabled={props.disabled}>

      {props.txt}
    </button>
  );
}

Button.propTypes = {
  txt: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button;
