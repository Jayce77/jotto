import { mount } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/testUtils';

const setUp = (state = {}) => {
  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', {tartget: {vaule: 'train'}});

  // simulate click on submit
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });

  return wrapper;
}

describe.skip('no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setUp({
      secretWord: 'party',
      success: false,
      guessedWords: []
    });
  });

  test('creates GuessedWords table with one row', () => {
    const guessesWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessesWordRows).toHaveLength(1)
  });
});

describe.skip('some words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setUp({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
    });
  });

  test('creates GuessedWords table with one row', () => {
    const guessesWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessesWordRows).toHaveLength(2)
  });
});

describe.skip('guess secret word', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setUp({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
    });

    // add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', {tartget: {vaule: 'party'}});

    // simulate click on submit
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('creates GuessedWords table with one row', () => {
    const guessesWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessesWordRows).toHaveLength(3)
  });
  
  test('display congrats component', () => {
    const congrats = findByTestAttr(wrapper, 'conponent-congrats');
    expect(congrats.text().length).toBeGreaterThan(0);
  })
});