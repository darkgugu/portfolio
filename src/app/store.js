import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { selectionSlice } from '../slices/selectionSlice.js'

let state = {
	selection: ['test'],
}

export const store = configureStore({
	preloadedState: state,
	reducer: combineReducers({
		selection: selectionSlice.reducer,
	}),
})
