export default function displayCurrentFen(fenState) {
  let fenContainer = document.getElementById('fen-container')
  if (fenContainer === null) {
    fenContainer = document.createElement('div')
    fenContainer.id = 'fen-container'
    fenContainer.className = 'fen-placeholder'
  }
  fenContainer.innerHTML = ''

  const fenPlaceholderSpan = document.createElement('span')
  const {
    piecesPlacements,
    playerTurn,
    castlingRights,
    possibleEnPassantTargets,
    halfmoveClock,
    fullmoveNumber
  } = fenState
  const updatedFen = `${piecesPlacements} ${playerTurn} ${castlingRights} ${possibleEnPassantTargets} ${halfmoveClock} ${fullmoveNumber}`
  fenPlaceholderSpan.innerText = updatedFen

  const copyFenButton = document.createElement('button')
  copyFenButton.className = 'copy-btn'
  copyFenButton.innerText = 'copy'
  copyFenButton.onclick = (event) => {
    const fenString = event.target.parentNode.firstChild.innerText
    navigator.clipboard.writeText(fenString)
  }

  fenContainer.appendChild(fenPlaceholderSpan)
  fenContainer.appendChild(copyFenButton)
  document.getElementById('chess-app').appendChild(fenContainer)
}
