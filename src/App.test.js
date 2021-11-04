import { mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils'
import { Provider } from 'react-redux';

import App from './App';

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from './actions';
const setUp = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

test('renders without error', () => {
  const wrapper = setUp();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });

  test('get secret word on app mount', () => {
    const wrapper = setUp();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('get secret word does not run on app update', () => {
    const wrapper = setUp();
    mockGetSecretWord.mockClear();

    wrapper.setProps()
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
})