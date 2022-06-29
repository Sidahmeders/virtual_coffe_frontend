export default function initBoard() {
  const boardContainerElement = document.createElement('div')
  boardContainerElement.id = 'board-container'

  const rows = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const colums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  rows.forEach((_, i) => {
    const rowContainerElement = document.createElement('div')
    rowContainerElement.className = 'board-row'

    colums.forEach((_, j) => {
      const columnElement = document.createElement('div')
      columnElement.className = 'board-column'

      if (j === 0) columnElement.innerText = colums[7 - i]
      if (8 - i === 0) columnElement.innerText = rows[j]
      if (j === 0 || 8 - i === 0 || j === 0) {
        columnElement.style.borderColor = '#fff'
        columnElement.style.background = '#fff'
      }

      rowContainerElement.appendChild(columnElement)
    })

    boardContainerElement.appendChild(rowContainerElement)
  })

  document.getElementById('chess-app').appendChild(boardContainerElement)
}
