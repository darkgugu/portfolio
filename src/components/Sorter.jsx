import '../assets/css/Sorter.css'
import { useSelector, useStore } from 'react-redux'
import { selectionSlice } from '../slices/selectionSlice.js'
import sortingPoints from '../assets/sortingPoints.json'
import { getSelection } from '../app/selectors.js'

export const Sorter = () => {
	const store = useStore()
	const selection = useSelector(getSelection)

	const addToStore = (payload) => {
		store.dispatch(selectionSlice.actions.addToSelection(payload))
	}

	return (
		<div className="Sorter">
			{sortingPoints.map((item, index) => (
				<button
					key={index}
					onClick={() => addToStore(item.name)}
					className={`${
						selection.includes(item.name) ? 'selected' : ''
					}`}
				>
					{item.displayName}
				</button>
			))}
		</div>
	)
}
