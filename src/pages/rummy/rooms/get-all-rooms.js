import { socket } from '../state/globals.js'
import { errorNotification } from '../notifications/index.js'
import { roomEvents } from '../constant/events.js'
import { roomListeners } from '../constant/listeners.js'

const fetchRooms = async () => {
  try {
    let response = await fetch('http://localhost:5000/apis/rooms')
    response = await response.json()
    return response
  } catch (error) {
    errorNotification(error)
  }
}

export default async function getAllRooms() {
  const { rooms } = await fetchRooms()
  const roomsContainer = document.getElementById('rooms-container')

  for (let roomName in rooms) {
    const roomElement = document.createElement('div')
    const formElement = document.createElement('form')
    formElement.id = `roomId-${roomName}`
    formElement.onsubmit = joinRoomHandler

    const roomNameInput = document.createElement('input')
    const passwordInput = document.createElement('input')
    const usernameInput = document.createElement('input')
    const buttonElement = document.createElement('button')

    roomNameInput.value = roomName
    roomNameInput.name = 'roomName'
    roomNameInput.readOnly = true
    passwordInput.placeholder = passwordInput.name = passwordInput.type = 'password'
    usernameInput.placeholder = usernameInput.name = 'username'
    buttonElement.innerText = 'join this room'

    formElement.append(roomNameInput, passwordInput, usernameInput, buttonElement)
    roomElement.appendChild(formElement)
    roomsContainer.appendChild(roomElement)
  }
}

function joinRoomHandler(event) {
  event.preventDefault()
  const roomId = event.target.id
  const room = document.getElementById(roomId).children
  const payload = {}

  for (let input of room) {
    let { name, value } = input
    payload[name] = value
  }

  socket.emit(roomEvents.rooms_join, payload)
}

socket.on(roomListeners.rooms_error, errorNotification)

socket.on(roomListeners.rooms_joined, (payload) => {
  const { roomName, username } = payload
  window.location.href = `/rummy/room?roomName=${roomName}&username=${username}`
})
