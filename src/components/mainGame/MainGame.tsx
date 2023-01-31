import RoundHeader from '../roundHeader/RoundHeader'
import PhotoMain from '../photoMain/PhotoMain'
import Results from '../results/Results'
import { useAppSelector } from '../../redux/store/store'

const MainGame = () => {
  const state = useAppSelector((state) => { return state.currentGame })

  return (
    <>
    <RoundHeader/>
    <PhotoMain/>
    { state.showRoundScore ? <Results/> : null}
    </>
  )
}

export default MainGame
