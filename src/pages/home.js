import { Link } from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  heading: {
    padding: '20px',
    textAlign: 'center'
  },
  card: {
    width: '220px',
    height: '120px',
    background: '#457',
    color: '#dfd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '12px',
    borderRadius: '4px'
  }
}

const CardItem = ({ label, href }) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={href}>
      <div style={styles.card}>{label}</div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <h1 style={styles.heading}>Choose Your Game</h1>
      <div style={styles.container}>
        <CardItem label="Rummy" href="/rummy" />
        <CardItem label="Chess" href="/chess" />
        <CardItem label="Domino" href="/domino" />
      </div>
    </>
  )
}
