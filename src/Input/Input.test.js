import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import Input from './Input';

const defaultProps = {secretWord: 'party'};
const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess]
}));

const setUp = (props = {}) => {
  const setUpProps = {...defaultProps, ...props}
  return shallow(<Input {...setUpProps} />);
}

test('does not throw a warning with expected props', () => {
  checkProps(Input, {});
});

test('Input renders with out error', () => {
  const wrapper = setUp();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

describe('state controlled input field', () => {
  test('state updates with value of input bos upon change', () => {
    const wrapper = setUp();
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = {target: {value: 'train' }};

    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});