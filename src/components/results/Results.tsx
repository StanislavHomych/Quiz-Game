/* eslint-disable no-lone-blocks */
import style from './results.module.css'
import { submitRound, showRoundResult, newRandomImage, resetGame } from '../../redux/currentGame/currentGameSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store/store'
import { getCookie, setCookie } from 'typescript-cookie'

const Results = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => { return state.currentGame })

  function newRound() {
    dispatch(submitRound())
    dispatch(showRoundResult(state.images[state.randomImageIndex].year))
    dispatch(newRandomImage(state.images))
  }

  function newGame() {
    dispatch(resetGame(state.images))
  }

  setCookie('bestResult', state.bestScore.toString())
  console.log(getCookie('name'))

  return (
    <div className='mb-4'>
      <div className={`${state.currenRoundScore > 500 ? 'bg-green-500' : 'bg-yellow-500'} flex items-center justify-center mb-2 h-20`}>
        <h1 className='commonHeader--2xl_bold'>
          Points :<span className='commonHeader--2xl_bold'>{state.currenRoundScore}</span>
        </h1>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <div>
          <h1 className='commonHeader--2xl_bold'>Photo was taken in <span>{state.currentPictureYear}</span></h1>
        </div>
        <input className={`${style.slider}`} readOnly type="range" value={state.currentPictureYear} min="1900" max="2023" />
        <div className='mt-2 w-full md:w-1/2'>
          <div className='flex justify-between items-center'>
            <h1 className='commonHeader--2xl_md invisible md:visible'>1900</h1>
            <h1 className='commonHeader--2xl_bold'>Total is <span className='text-green-500'>{state.totalScore}</span></h1>
            <h1 className='commonHeader--2xl_md invisible md:visible'>2023</h1>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          {state.roundNumber === 5 ?
            <h1 className='commonHeader--2xl_bold'>Your best result is {getCookie('bestResult')}</h1> : null}
        </div>
        <div>
          {state.roundNumber === 5 ?
            <button onClick={newGame} className='button mt-4'>New Game</button> :
            <button className='button mt-4 ' onClick={newRound}>Next Round</button>}
        </div>
      </div>
    </div>
  )
}

export default Results
