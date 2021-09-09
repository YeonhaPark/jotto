import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import GuessedWords, { Props } from './GuessedWords';

const setup = (props: Props) => shallow(<GuessedWords {...props} />);

describe('if there are no words guessed', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper: ShallowWrapper;
  const guessedWords = [
    { guessedWord: 'river', letterMatchCount: 0 },
    { guessedWord: 'sound', letterMatchCount: 1 },
  ];

  beforeEach(() => {
    wrapper = setup({
      guessedWords,
    });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    const guessedWordNode = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});
