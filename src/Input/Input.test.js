import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import Input from './Input';

const defaultProps = {success: false, secretWord: 'party'};

const setUp = (props = {}) => {
  const setUpProps = {...defaultProps, ...props}
  return shallow(<Input {...setUpProps} />);
}

const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess]
}));

test('does not throw a warning with expected props', () => {
  checkProps(Input, {});
});

describe('render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({success: true});
  })

  describe('success is true', () => {
    test('Input renders with out error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('Input box does not show', () => {
      const inputNode = findByTestAttr(wrapper, 'input-box');
      expect(inputNode.exists()).toBe(false);
    });
    test('Submit button does not show', () => {
      const buttonNode = findByTestAttr(wrapper, 'submit-button');
      expect(buttonNode.exists()).toBe(false);
    });    
  });

  describe('success is false', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({success: false});
    })
  
    describe('success is false', () => {
      test('Input renders with out error', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
      });
      test('Input box shows', () => {
        const inputNode = findByTestAttr(wrapper, 'input-box');
        expect(inputNode.exists()).toBe(true);
      });
      test('Submit button shows', () => {
        const buttonNode = findByTestAttr(wrapper, 'submit-button');
        expect(buttonNode.exists()).toBe(true);
      });    
    });
  });
})


describe('state controlled input field', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setUp();
  });
  
  test('state updates with value of input bos upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = {target: {value: 'train' }};

    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const buttonNode = findByTestAttr(wrapper, 'submit-button');

    buttonNode.simulate('click', {preventDefault() {}});
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});