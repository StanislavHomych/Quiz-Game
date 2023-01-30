import { Link } from 'react-router-dom'

const Header = () => {
  return <div className="flex h-10 bg-gray-700 items-center">
    <Link to="/">
    <h1>Chronophoto</h1>
    </Link>
  </div>
}

export default Header
