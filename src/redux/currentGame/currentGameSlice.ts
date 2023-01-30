import { createSlice } from '@reduxjs/toolkit'

export interface gameState {
  roundNumber: 1 | 2 | 3 | 4 | 5
  totalScore: number
  currenRoundScore: number
  currentPictureYear: number
  selectedYear: number
}

const initialState: gameState = {
  roundNumber: 1,
  totalScore: 0,
  currenRoundScore: 0,
  currentPictureYear: 0,
  selectedYear: 0
}

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {}
})

export default gameSlice
