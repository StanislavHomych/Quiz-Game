import style from './results.module.css'
import { submitRound, showRoundResult, newRandomImage } from '../../redux/currentGame/currentGameSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store/store'

const Results = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => { return state.currentGame })

  function newRound () {
    dispatch(submitRound())
    dispatch(showRoundResult())
    dispatch(newRandomImage(state.images))
  }

  return (
    <div>
      <div className='flex items-center justify-center bg-gray-200 h-20'>
        <h1 className=''>Points</h1>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <h1>0</h1>
        <div>
            <h1>Photo was taken in 1990</h1>
        </div>
        <input className={style.slider} readOnly type="range" value="50" min="0" max="100" />
        <div>
            <h1>Total is 0</h1>
        </div>
        <div>
            <button className='bg-green-100 h-10 w-25' onClick={newRound}>Next Round</button>
        </div>
      </div>
    </div>
  )
}

export default Results
