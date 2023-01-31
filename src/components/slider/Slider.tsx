import styles from './slider.module.css'
import { useState } from 'react'
import { showRoundResult, resetGame } from '../../redux/currentGame/currentGameSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store/store'

const Slider = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => { return state.currentGame })

  function showResults () {
    dispatch(showRoundResult())
  }

  function newRound () {
    dispatch(resetGame(state.images))
  }
  const [yearInRange, setYearInRange] = useState('1960')

  return (
    <div>
      <div>{yearInRange}</div>
      <div className={styles.slidercontainer}>
        <input className={styles.slider}
        type="range"
        min="1900"
        max="2023"
        onChange={(e) => { setYearInRange(e.target.value) }}
        value={yearInRange}
        id="yearRange"
           />
      </div>
      <div className='flex items-center justify-center'>
        {state.roundNumber === 5 ? <button onClick={newRound} className='bg-green-100 h-10 w-28'>New Round</button> : !state.showRoundScore && <button className='bg-green-100 h-10 w-20' onClick={showResults}>Submit</button>}
      </div>
    </div>
  )
}

export default Slider
