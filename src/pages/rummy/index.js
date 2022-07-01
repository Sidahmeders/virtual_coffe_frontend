import rummyInit from './rummyInit'

export default function Rummy() {
  return (
    <>
      <h1>WELCOME TO THE RUMMY GAME</h1>
      <div id="rummy-app"></div>
      {rummyInit()}
    </>
  )
}
