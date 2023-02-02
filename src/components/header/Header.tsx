import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return <div className=" flex h-20 bg-zinc-200 items-center ">
    <Link to="/">
    <h1 className={`${styles.header} ml-10`}>Chronophoto</h1>
    </Link>
  </div>
}

export default Header
