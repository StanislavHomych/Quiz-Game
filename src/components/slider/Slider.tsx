import styles from './slider.module.css'
import { showRoundResult, resetGame, selectYear, calculateCurrentRoundScore } from '../../redux/currentGame/currentGameSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store/store'

const Slider = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => { return state.currentGame })

  function showResults () {
    dispatch(showRoundResult(state.images[state.randomImageIndex].year))
    calculateNumberOfPoints()
  }

  const calculateNumberOfPoints = () => {
    const difference = state.currentPictureYear - state.selectedYear
    console.log(`diff is ${difference}`)
    const allowedDifferenceFirst = 30
    const allowedDifferenceSecond = -30
    if (state.selectedYear === state.currentPictureYear) {
      dispatch(calculateCurrentRoundScore(1000))
    } else if (difference <= allowedDifferenceFirst && difference >= 0) {
      const percent = difference / allowedDifferenceFirst
      dispatch(calculateCurrentRoundScore(Math.floor(1000 * (1 - percent))))
    } else if (difference >= allowedDifferenceSecond && difference <= 0) {
      const percent = Math.abs(difference) / allowedDifferenceFirst
      dispatch(calculateCurrentRoundScore((Math.floor(1000 * (1 - percent)))))
    } else {
      dispatch(calculateCurrentRoundScore((0)))
    }
  }

  function newRound () {
    dispatch(resetGame(state.images))
  }

  return (
    <div>
      <div className='flex items-center justify-center'>
        <h1 className='font-K2D text-2xl mt-2 mb-2'>
         {state.selectedYear}
        </h1>
        </div>
      <div className={`${styles.slidercontainer} flex items-center justify-center`}>
        <input className={styles.slider}
        type="range"
        min="1900"
        max="2023"
        onChange={(e) => { dispatch(selectYear(+e.target.value)) }}
        value={state.selectedYear}
        id="yearRange"
           />
      </div>
      <div className='flex items-center justify-center'>
        {state.roundNumber > 5 ? <button onClick={newRound} className='font-K2D text-2xl h-14 w-40 rounded-md text-white bg-light-green mt-4 transition duration-500 hover:bg-dark-green hover:text-black'>New Round</button> : !state.showRoundScore && <button className='font-K2D text-2xl h-14 w-40 rounded-md text-white bg-light-green mt-4 transition duration-500 hover:bg-dark-green hover:text-black' onClick={showResults}>Submit</button>}
      </div>
    </div>
  )
}

export default Slider
