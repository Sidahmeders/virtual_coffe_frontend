import './roomsPage/styles.css'
import createRooms from './roomsPage/create-rooms'
import getAllRooms from './roomsPage/get-all-rooms'

export default function rummyInit() {
  const alertEl = document.createElement('div')
  alertEl.id = 'alert'
  const createRoomEl = document.createElement('div')
  createRoomEl.id = 'create-room'
  const roomsContainer = document.createElement('div')
  roomsContainer.id = 'rooms-container'

  setTimeout(() => {
    const rummyApp = document.getElementById('rummy-app')
    rummyApp.appendChild(alertEl)
    rummyApp.appendChild(createRoomEl)
    rummyApp.appendChild(roomsContainer)

    createRooms()
    getAllRooms()
  }, 500)
}
