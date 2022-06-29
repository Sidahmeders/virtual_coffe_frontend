import './styles.css'
import chessInit from './chessInit'

export default function Chess() {
  return (
    <div id="chess-container">
      <h1 style={{ padding: '20px' }}>WELCOME TO THE CHESS GAME</h1>
      <div id="chess-app"></div>
      {chessInit()}
    </div>
  )
}
