import '../assets/css/Sorter.css'
import { useSelector, useStore } from 'react-redux'
import { selectionSlice } from '../slices/selectionSlice.js'
import sortingPoints from '../assets/sortingPoints.json'
import { getSelection } from '../app/selectors.js'

export const Sorter = () => {
	const store = useStore()
	const selection = useSelector(getSelection)

	const addToStore = (payload) => {
		if (!selection.includes(payload)) {
			store.dispatch(selectionSlice.actions.addToSelection(payload))
		} else {
			store.dispatch(selectionSlice.actions.removeFromSelection(payload))
		}
	}

	const clearFilters = () => {
		selection.forEach((element) => {
			store.dispatch(selectionSlice.actions.removeFromSelection(element))
		})
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
			<button onClick={() => clearFilters()} id="clearFilters">
				Réinitialiser les filtres
			</button>
		</div>
	)
}
