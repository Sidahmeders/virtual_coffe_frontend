import './styles.css'
import createRooms from './create-rooms'
import getAllRooms from './get-all-rooms'

function rummyInit() {
  setTimeout(() => {
    const createRoomsPlaceholder = `
      <div id="alert"></div>
      <div id="create-room"></div>
      <div id="rooms-container"></div>
    `
    document.getElementById('rummy-pick-rooms').innerHTML = createRoomsPlaceholder

    createRooms()
    getAllRooms()
  }, 500)
}

export default function Rummy() {
  return (
    <>
      <h1>WELCOME TO THE RUMMY GAME</h1>
      <div id="rummy-pick-rooms"></div>
      {rummyInit()}
    </>
  )
}
