import { PropTypes } from 'prop-types';
import { useState } from 'react';

const Input = ({secretWord}) => {
  const [currentGuess, setCurrentGuess ] = useState('');
  
  return (
    <div data-test="component-input">
      <form
        action=""
        className="form-inline">
        <input
          type="text"
          data-test="input-box"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess('') }
          }
          data-test="submit-button"
          className="btn btn-primary mb-2" >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.prototypes = {
  secretWord: PropTypes.string.IsRequired
}

export default Input;