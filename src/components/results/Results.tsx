/* eslint-disable no-lone-blocks */
import style from './results.module.css'
import { submitRound, showRoundResult, newRandomImage, resetGame } from '../../redux/currentGame/currentGameSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store/store'
import { getCookie, setCookie } from 'typescript-cookie'

const Results = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => { return state.currentGame })

  function newRound () {
    dispatch(submitRound())
    dispatch(showRoundResult(state.images[state.randomImageIndex].year))
    dispatch(newRandomImage(state.images))
  }

  function newGame () {
    dispatch(resetGame(state.images))
  }

  setCookie('bestResult', state.bestScore.toString())
  console.log(getCookie('name'))

  return (
    <div>
      <div className='flex items-center justify-center bg-gray-200 h-20'>
        <h1 className=''>Points</h1>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <h1>{state.currenRoundScore}</h1>
        <div>
            <h1>Photo was taken in {state.currentPictureYear}</h1>
        </div>
        <input className={style.slider} readOnly type="range" value="50" min="0" max="100" />
        <div>
            <h1>Total is {state.totalScore}</h1>
            {state.roundNumber === 5 ? <h1>Your best result is { getCookie('bestResult') }</h1> : null}
        </div>
        <div>
            {state.roundNumber === 5 ? <button onClick={newGame} className='bg-green-100 h-10 w-28'>New Game</button> : <button className='bg-green-100 h-10 w-25' onClick={newRound}>Next Round</button>}
        </div>
      </div>
    </div>
  )
}

export default Results
