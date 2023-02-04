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
    <div className='mb-4'>
      <div className={`${state.currenRoundScore > 500 ? 'bg-green-500' : 'bg-yellow-500'} flex items-center justify-center mb-2 h-20`}>
        <h1 className='font-K2D text-2xl font-bold'>
          Points :<span className='font-K2D text-2xl font-bold'>{state.currenRoundScore}</span>
          </h1>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <div>
            <h1 className='font-K2D text-2xl font-bold'>Photo was taken in <span>{state.currentPictureYear}</span></h1>
        </div>
        <input className={`${style.slider}`} readOnly type="range" value={state.currentPictureYear} min="1900" max="2023" />
        <div className='mt-2 w-1/2'>
            <div className='flex justify-between items-center'>
              <h1 className='font-K2D text-xl font-medium'>1900</h1>
              <h1 className='font-K2D text-2xl font-bold'>Total is <span className='text-green-500'>{state.totalScore}</span></h1>
              <h1 className='font-K2D text-xl font-medium'>2023</h1>
            </div>
        </div>
        <div className='flex items-center justify-center'>
        {state.roundNumber === 5 ? <h1 className='font-K2D text-2xl font-bold'>Your best result is { getCookie('bestResult') }</h1> : null}
        </div>
        <div>
            {state.roundNumber === 5 ? <button onClick={newGame} className='font-K2D text-2xl h-14 w-40 rounded-md text-white bg-light-green mt-4 transition duration-500 hover:bg-dark-green hover:text-black'>New Game</button> : <button className='font-K2D text-2xl h-14 w-40 rounded-md text-white bg-light-green mt-4 transition duration-500 hover:bg-dark-green hover:text-black' onClick={newRound}>Next Round</button>}
        </div>
      </div>
    </div>
  )
}

export default Results
