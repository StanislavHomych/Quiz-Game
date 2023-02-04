import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface imageType {
  id: number
  year: number
  src: string
}

export interface gameState {
  roundNumber: number
  totalScore: number
  bestScore: number
  currenRoundScore: number
  currentPictureYear: number
  randomImageIndex: number
  selectedYear: number
  showRoundScore: boolean
  images: imageType[]
  loading: boolean
  error: string
}

const initialState: gameState = {
  roundNumber: 1,
  totalScore: 0,
  bestScore: 0,
  currenRoundScore: 0,
  currentPictureYear: 0,
  randomImageIndex: 0,
  selectedYear: 1962,
  showRoundScore: false,
  images: [],
  loading: false,
  error: ''
}

export const fetchImages = createAsyncThunk('gameSlice/fetchImages', () => {
  return axios
    .get('https://api-quiz-ga.herokuapp.com/images')
    .then((response) => response.data.map((image: imageType) => image))
})

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchImages.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.images = action.payload
      state.error = ''
      state.randomImageIndex = Math.round(Math.random() * (action.payload.length - 1))
      state.currentPictureYear = action.payload[state.randomImageIndex].year
    })

    builder.addCase(fetchImages.rejected, (state, action) => {
      state.loading = false
      state.images = []
      if (action.error.message) {
        state.error = action.error.message
      }
    })
  },
  reducers: {
    submitRound: (state) => {
      state.roundNumber = state.roundNumber + 1
      state.currenRoundScore = 0
      state.selectedYear = 1960
    },
    showRoundResult: (state, action) => {
      state.showRoundScore = !state.showRoundScore
      state.currentPictureYear = action.payload
    },
    newRandomImage: (state, action) => {
      state.randomImageIndex = Math.round(Math.random() * (action.payload.length - 1))
      state.currentPictureYear = action.payload[state.randomImageIndex].year
    },
    resetGame: (state, action) => {
      state.roundNumber = 1
      state.currenRoundScore = 0
      state.totalScore = 0
      state.randomImageIndex = Math.round(Math.random() * (action.payload.length - 1))
      state.showRoundScore = !state.showRoundScore
      state.selectedYear = 1960
    },
    selectYear: (state, action) => {
      state.selectedYear = action.payload
    },
    calculateCurrentRoundScore: (state, action) => {
      state.currenRoundScore = action.payload
      state.totalScore = state.currenRoundScore + state.totalScore
      if (state.bestScore < state.totalScore) {
        state.bestScore = state.totalScore
      }
    }
  }
})

export const { submitRound, showRoundResult, newRandomImage, resetGame, selectYear, calculateCurrentRoundScore } = gameSlice.actions
export default gameSlice
