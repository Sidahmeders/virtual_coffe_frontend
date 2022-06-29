import './styles.css'
import chessInit from './chessInit'

export default function Chess() {
  return (
    <div
      style={{
        border: '2px solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <h1 style={{ padding: '20px' }}>WELCOME TO THE CHESS GAME</h1>
      <div id="chess-app"></div>
      {chessInit()}
    </div>
  )
}
