import validateMoves, { clearPieceMovementsHighlight, swapNodes } from './validateMoves.js'

let selectedNode = null

export default function addDragableEvents(nodeElement) {
  // mouse events
  nodeElement.ondragstart = dragStart
  nodeElement.ondragend = dragEnd
  nodeElement.ondragover = dragOver
  nodeElement.ondragenter = dragEnter
  nodeElement.ondragleave = dragLeave
  nodeElement.ondrop = dragDrop
  // touchscreen events
  nodeElement.ontouchstart = touchStart
  nodeElement.ontouchmove = touchMove
  nodeElement.ontouchend = touchEnd
}

const dragStart = (e) => {
  e.target.classList.add('hold')
  setTimeout(() => e.target.classList.add('invisible'), 0)
  validateMoves(e.target)
  selectedNode = e.target
}

const dragEnd = (e) => {
  e.target.classList.remove('invisible')
  e.target.classList.remove('hold')
  clearPieceMovementsHighlight()
}

const dragOver = (e) => e.preventDefault()

const dragEnter = (e) => {
  e.preventDefault()
  e.target.classList.add('hovered')
}

const dragLeave = (e) => e.target.classList.remove('hovered')

const dragDrop = (e) => {
  e.target.classList.remove('hovered')
  swapNodes(selectedNode, e.target)
}

const touchStart = (e) => {
  e.preventDefault()
  dragStart(e)
}

const touchMove = (e) => {
  const touchLocation = e.changedTouches[0]
  let draggableChessPiece = document.getElementById('draggable-chess-piece')
  if (draggableChessPiece === null) {
    draggableChessPiece = document.createElement('img')
    draggableChessPiece.id = 'draggable-chess-piece'
    draggableChessPiece.style = `
    position: absolute;
    width: 38px;
    `
  }
  draggableChessPiece.src = selectedNode.src
  draggableChessPiece.style.left = touchLocation.pageX - 12 + 'px'
  draggableChessPiece.style.top = touchLocation.pageY - 20 + 'px'
  document.getElementById('chess-app').appendChild(draggableChessPiece)
}

const touchEnd = (e) => {
  dragDrop(e)
  dragEnd(e)
}
