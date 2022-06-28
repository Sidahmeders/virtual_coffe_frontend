import { watchEffect } from './scripts/_reactivity.js'
import { fenState } from './scripts/_state.js'

import initBoard from './scripts/initBoard.js'
import loadPositionFromFen from './scripts/loadPositionFromFen.js'
import displayCurrentFen from './scripts/displayCurrentFen.js'

export default function chessInit() {
  setTimeout(() => {
    initBoard()
    loadPositionFromFen()
    watchEffect(() => displayCurrentFen(fenState))
  }, 500)
}
