import { createSlice } from '@reduxjs/toolkit'

export const selectionSlice = createSlice({
	name: 'selection',
	initialState: {},
	reducers: {
		addToSelection: (currentState, action) => {
			if (!currentState.includes(action.payload)) {
				currentState.push(action.payload)
			}
		},
		removeFromSelection: (currentState, action) => {
			const selection = currentState.filter(
				(item, index) => index !== action.payload
			)
			return { ...currentState, selection: selection }
		},
	},
})
