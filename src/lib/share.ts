import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GameStats } from './localStorage'

export const shareStatus = (guesses: string[], lost: boolean, gameStats: GameStats) => {
  const { gamesFailed, totalGames, successRate, currentStreak, bestStreak } = gameStats;
  const gamesWon = totalGames - gamesFailed;

  navigator.clipboard.writeText(
    `unfoldingWordle.org\n` +
    `📖 ${solutionIndex} ${lost ? '❌' : `✅ ${guesses.length}`}/6 🔥${currentStreak}\n` +
    `🏆${gamesWon}/${totalGames}=${successRate}% 🌟${bestStreak}\n` +
    generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
