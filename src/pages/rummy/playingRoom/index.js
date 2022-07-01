import './styles/cards.css'
import './styles/declare-cards-btn.css'
import './styles/declared-players.css'
import './styles/drop-box.css'
import './styles/dropped-cards.css'
import './styles/local-player.css'
import './styles/peers-status-container.css'
import './styles/player-status.css'

// import '../peers-call/index.js'
import { socket } from '../state/globals.js'

import { DropBox, DeckHidden, PlayerStatus, DeclareCardsBtn } from './components/index.js'
import { roomListeners } from '../constant/listeners.js'
import { errorNotification } from '../notifications/index.js'
import {
  fetchRoomData,
  displayRoomData,
  addDraggedCard,
  removeDroppedCard,
  updateSwappedCards,
  addDroppedCards,
  updateOnlineStatus,
  updateTurnToPickStatus,
  updatePlayerCards,
  displayDeclaredCards,
  updateLaidoffMeld
} from './eventHandlers.js'

export default function joinedRoom() {
  function initRoom() {
    fetchRoomData()
    DeclareCardsBtn()
    DropBox()
    DeckHidden()
  }

  document.addEventListener('state-change', (event) => {
    const { payload } = event.detail
    if (payload.type === 'player-points') {
      PlayerStatus(payload.data)
      DeclareCardsBtn(payload.data)
    } else console.warn('state has been changed...')
  })

  socket.on(roomListeners.rooms_error, errorNotification)
  socket.on(roomListeners.rooms_joined, displayRoomData)

  socket.on(roomListeners.cards_dragged, addDraggedCard)
  socket.on(roomListeners.cards_dropped, removeDroppedCard)
  socket.on(roomListeners.peers_dropped_card, addDroppedCards)
  socket.on(roomListeners.cards_swapped, updateSwappedCards)

  socket.on(roomListeners.cards_updated, updatePlayerCards)
  socket.on(roomListeners.cards_declared, displayDeclaredCards)
  socket.on(roomListeners.cards_laidoff, updateLaidoffMeld)

  socket.on(roomListeners.peers_disconnect, updateOnlineStatus)
  socket.on(roomListeners.peers_connect, updateOnlineStatus)
  socket.on(roomListeners.peers_trunToPick, updateTurnToPickStatus)

  return (
    <>
      <div id="rummy-playing-room">
        <section id="VC">
          <div id="videos">
            <video id="localVideo" autoPlay></video>
            {/* <!-- remote videos goes here --> */}
          </div>
        </section>

        <div id="alert"></div>

        <div id="local-player"></div>
        <div id="player-status"></div>
        <div id="peers-status-container"></div>
        <div id="declared-players"></div>

        <div id="deck-cards"></div>
        <div id="dropped-cards"></div>
        <div id="drop-box">drop box</div>
      </div>
      {setTimeout(() => initRoom(), 500)}
    </>
  )
}
