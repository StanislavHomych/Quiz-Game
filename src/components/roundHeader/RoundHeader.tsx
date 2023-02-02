import { useAppSelector } from '../../redux/store/store'
import styles from './roundHeader.module.css'

const RoundHeader = () => {
  const currentRound = useAppSelector((state) => { return state.currentGame.roundNumber })
  return (
    <div className='h-10 bg-gray-100 flex items-center justify-center'>
        <h1 className={styles.roundHeader}>Round {currentRound} of 5</h1>
    </div>
  )
}

export default RoundHeader
