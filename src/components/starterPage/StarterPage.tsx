import { Link } from 'react-router-dom'

const StarterPage = () => {
  return (
    <div className='flex items-center flex-col'>
      <h2>Chronophoto - this is a game where you guess the year in which the photo was taken</h2>
      <Link to="/game">
      <button className='bg-green-100 w-24 h-10'>Play</button>
      </Link>
    </div>
  )
}

export default StarterPage
