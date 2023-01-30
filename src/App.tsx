import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import StarterPage from './components/starterPage/StarterPage'
import MainGame from './components/mainGame/MainGame'

function App () {
  return <div>
    <Header/>
    <Routes>
      <Route path="/" element={<StarterPage/>}></Route>
      <Route path="/game" element={<MainGame/>}></Route>

    </Routes>

  </div>
}

export default App
