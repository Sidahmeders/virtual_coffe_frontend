import io from 'socket.io-client'

const socket = io.connect('http://localhost:5000')

// peer-call
const WebRtcState = {
  peersMap: {},
  localUuid: undefined,
  localStream: undefined,
  localVideo: document.getElementById('localVideo'),
  room: undefined,
  localUserName: undefined,

  turnReady: undefined,
  STUNServers: null,
  mediaConstraint: { audio: false, video: true },
  peerConfig: {
    iceServers: [
      {
        urls: [
          'stun:stun.l.google.com:19302',
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302'
        ]
      }
    ],
    iceCandidatePoolSize: 10
  }
}

export { socket, WebRtcState }
