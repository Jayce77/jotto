import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr } from '../../test/testUtils';

const setUp = (props={}) => {
  return shallow(<Congrats {...props} />)
} 

test('renders without error', () => {
  const wrapper = setUp();
  const component = findByTestAttr(wrapper, 'component-congrats');
  console.log(wrapper.debug())
  expect(component.length).toBe(1);
});

test('renders no text when success is false', () => {
  const wrapper = setUp({ success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  console.log(wrapper.debug())
  expect(component.text()).toBe('');
});

test('renders non-empty success message when success is true', () => {
  const wrapper = setUp({ success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  console.log(wrapper.debug())
  expect(message.text().length).not.toBe(0);
});