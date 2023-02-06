import { Link } from 'react-router-dom'
import styles from './starterPage.module.css'
import firstMainImg from '../../assets/images/1948.jpg'
import secondMainImg from '../../assets/images/2022.jpg'
import thirdMainImg from '../../assets/images/2007.jpg'

const StarterPage = () => {
  return (
    <div className='h-screen bg-stone-300 flex items-left flex-col pl-10 pr-10 sm:text-center h-full md:text-left md:h-screen'>
      <h2 className={`${styles.headingMain} mt-6 lg:w-4/5`}>This is a game where you guess the year in which the photo was taken, the closer to the year you entered, the more points you will get.</h2>
      <Link to="/game">
        <button className='button w-full md:w-48'>PLAY</button>
      </Link>
      <div className='flex mt-10 justify-between flex-col md:flex-row'>
        <div className={`${styles.imgBoxMain} w-full md:w-1/3`}>
          <h1 className={`${styles.yearHeading} md:text-6xl xl:text-7xl`}>1948</h1>
          <div className={styles.imgBox}>
            <img className={`${styles.imgMain}`} src={firstMainImg} alt="exampleImg" />
          </div>
        </div>
        <div className={`${styles.imgBoxMain} w-full md:w-1/3`}>
          <h1 className={`${styles.yearHeading} md:text-6xl xl:text-7xl`}>2022</h1>
          <div className={styles.imgBox}>
            <img className={`${styles.imgMain}`} src={secondMainImg} alt="exampleImg2" />
          </div>
        </div>
        <div className={`${styles.imgBoxMain} w-full md:w-1/3`}>
          <h1 className={`${styles.yearHeading} md:text-6xl xl:text-7xl`}>2007</h1>
          <div className={styles.imgBox}>
            <img className={`${styles.imgMain}`} src={thirdMainImg} alt="exampleImg2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StarterPage
