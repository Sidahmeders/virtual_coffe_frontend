export default function getRoomInfo() {
  const searchQuery = window.location.search.split('&')
  const roomName = searchQuery[0].split('=')[1]
  const username = searchQuery[1].split('=')[1]

  return { roomName, username }
}
