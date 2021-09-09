export interface Props {
  guessedWords: { guessedWord: string; letterMatchCount: number }[];
}
export default function GuessedWords({ guessedWords }: Props) {
  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => {
      return (
        <tr data-test="guessed-word" key={index}>
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          {guessedWordsRows}
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{contents}</div>;
}
