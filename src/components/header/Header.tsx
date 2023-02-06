import { Link } from 'react-router-dom'

const Header = () => {
  return <div className=" flex h-20 bg-zinc-200 items-center ">
    <Link to="/">
    <h1 className='font-K2D ml-10 italic font-bold text-4xl'>Chronophoto</h1>
    </Link>
  </div>
}

export default Header
