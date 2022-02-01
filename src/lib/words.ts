import { WORDS } from '../constants/wordlistULT';
import { VALIDGUESSES } from '../constants/validGuesses';

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  );
};

export const isWinningWord = (word: string) => {
  return solution === word;
};

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs;

  const wordsLength = WORDS.length;
  const yearOffset = new Date().getFullYear() - 2022;
  const daysOfYear = 365; // TODO: offset for leapyear.
  const dayOffset = Math.round(wordsLength/daysOfYear);

  // Want the day of the year to be proportionate to the ratio of the wordlist, beginning vs end of each.
  const wordlistIndex = dayOffset + dayOffset + yearOffset;

  return {
    solution: WORDS[wordlistIndex].toUpperCase(),
    solutionIndex: wordlistIndex,
    tomorrow: nextday,
  };
};

export const { solution, solutionIndex, tomorrow } = getWordOfDay();
