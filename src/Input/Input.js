import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Input = ({secretWord}) => {
  const [currentGuess, setCurrentGuess ] = useState('');
  const success = useSelector(state => state.successReducer.success);
  console.log(success)
  
  if (success) {
    return <div data-test="component-input"></div>
  }
  
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