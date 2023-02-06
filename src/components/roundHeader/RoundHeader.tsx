import { useAppSelector } from '../../redux/store/store'

const RoundHeader = () => {
  const currentRound = useAppSelector((state) => { return state.currentGame.roundNumber })
  return (
    <div className='h-10 bg-gray-100 flex items-center justify-center'>
      <h1 className='commonHeader--2xl_bold'>Round {currentRound} of 5</h1>
    </div>
  )
}

export default RoundHeader
