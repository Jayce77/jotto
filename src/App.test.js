import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils'
import App from './App';

const setUp = () => {
  return shallow(<App />);
}

test('renders without error', () => {
  const wrapper = setUp();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});
