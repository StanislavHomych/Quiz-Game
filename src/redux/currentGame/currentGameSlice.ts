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
  currenRoundScore: 0,
  currentPictureYear: 0,
  randomImageIndex: 0,
  selectedYear: 0,
  showRoundScore: false,
  images: [],
  loading: false,
  error: ''
}

export const fetchImages = createAsyncThunk('gameSlice/fetchImages', () => {
  return axios
    .get('http://localhost:3000/images')
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
    },
    showRoundResult: (state) => {
      state.showRoundScore = !state.showRoundScore
    },
    newRandomImage: (state, action) => {
      state.randomImageIndex = Math.round(Math.random() * (action.payload.length - 1))
    },
    resetGame: (state, action) => {
      state.roundNumber = 1
      state.currenRoundScore = 0
      state.totalScore = 0
      state.randomImageIndex = Math.round(Math.random() * (action.payload.length - 1))
    }
  }
})

export const { submitRound, showRoundResult, newRandomImage, resetGame } = gameSlice.actions
export default gameSlice
