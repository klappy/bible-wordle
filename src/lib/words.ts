import { WORDS } from '../constants/wordlistULT';

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase())
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
  const currentDate = new Date().valueOf();
  const currentYear = new Date().getFullYear();
  const yearOffset = currentYear - 2022;
  const dateOfYearStart = new Date(currentYear, 0, 0).valueOf();
  const timeSinceBeginningOfYear = currentDate - dateOfYearStart;
  const dayOfTheYear = Math.floor( timeSinceBeginningOfYear / 1000 / 60 / 60 / 24 );
  const daysInAYear = 365.25; // offset for leapyear.
  const dayOffset = Math.round(wordsLength/daysInAYear);
  // Want the day of the year to be proportionate to the ratio of the wordlist, beginning vs end of each.
  const wordIndex = (dayOfTheYear * dayOffset) + yearOffset;

  return {
    solution: WORDS[wordIndex%wordsLength].toUpperCase(),
    solutionIndex: wordIndex,
    tomorrow: nextday,
  };
};

export const { solution, solutionIndex, tomorrow } = getWordOfDay();
