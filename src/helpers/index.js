export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split('');
  const guesedLetterSet = new Set(guessedWord);
  return secretLetters.filter(letter => guesedLetterSet.has(letter)).length;

}