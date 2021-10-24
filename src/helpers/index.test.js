import { getLetterMatchCount } from '.';

describe('getLetterMatchCount returns correct count', () => {
  const secretWord = 'party';
  
  test('no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  })
  
  test('three letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  })
  
  test('duplicate letters', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  })
});