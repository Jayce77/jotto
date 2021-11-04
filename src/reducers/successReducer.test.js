import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('when previous state is undefined return false', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toStrictEqual({success: false});
});

test('return previous state when unknown action type', () => {
  const newState = successReducer({success: false}, { type: 'unknown' });
  expect(newState).toStrictEqual({success: false});
});

test('return true for action type CORRECT_GUESS', () => {
  const newState = successReducer(false, { type: 'CORRECT_GUESS' });
  expect(newState).toStrictEqual({success: true});
});