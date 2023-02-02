import { Link } from 'react-router-dom'
import styles from './starterPage.module.css'
import firstMainImg from '../../assets/images/1948.jpg'
import secondMainImg from '../../assets/images/2022.jpg'
import thirdMainImg from '../../assets/images/2007.jpg'

const StarterPage = () => {
  return (
    <div className='h-screen bg-stone-300 flex items-left flex-col'>
      <h2 className={`${styles.headingMain} ml-10 mt-6`}>This is a game where you guess the year in which the photo was taken,</h2>
      <h2 className={`${styles.headingMain} ml-10`}>the closer to the year you entered, the more points you will get.</h2>
      <Link to="/game">
      <button className={`${styles.btnMain} mt-10 ml-10 w-44 h-20`}>PLAY</button>
      </Link>
      <div className='flex mt-10 pl-10 pr-10 justify-between'>
        <div className={styles.imgBoxMain}>
        <h1 className={styles.yearHeading}>1948</h1>
        <div className={styles.imgBox}>
           <img className={`${styles.imgMain}`} src={firstMainImg} alt="exampleImg" />
        </div>
        </div>
        <div className={styles.imgBoxMain}>
        <h1 className={styles.yearHeading}>2022</h1>
        <div className={styles.imgBox}>
        <img className={`${styles.imgMain}`} src={secondMainImg} alt="exampleImg2" />
        </div>
        </div>
        <div className={styles.imgBoxMain}>
        <h1 className={styles.yearHeading}>2007</h1>
        <div className={styles.imgBox}>
         <img className={`${styles.imgMain}`} src={thirdMainImg} alt="exampleImg2" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default StarterPage
