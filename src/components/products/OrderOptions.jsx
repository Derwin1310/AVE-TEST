import { useContext } from 'react'
import { store } from '../../context/store'
import 'animate.css'

export const OrderSelect = () => {
	const {  productList, effects: { setProductList } } = useContext(store)
	const orderByPrice = isHigh => {
		const sortedList = [...productList].sort((a, b) =>
			isHigh ? b.price - a.price : a.price - b.price,
		)
		setProductList(sortedList)
	}

	const orderByTitle = AtoZ => {
		const newList = [...productList].sort((a, b) => {
			const nameA = a.title.toUpperCase()
			const nameB = b.title.toUpperCase()
			return nameA < nameB ? -1 : 1
		})

		const sortedList = AtoZ ? newList : newList.reverse()
		setProductList(sortedList)
	}

	const options = [
		{
			text: 'A to Z',
			onClick: () => orderByTitle(true),
		},
		{
			text: 'Z to A',
			onClick: () => orderByTitle(),
		},
		{
			text: 'Higher price',
			onClick: () => orderByPrice(true),
		},
		{
			text: 'Lower price',
			onClick: () => orderByPrice(),
		}
	]

	return (
		<ul className={"options animate__animated animate__fadeInLeft"}>
			{options.map(({ text, onClick }) => (
				<li key={text} className='option' onClick={onClick}>
					{text}
				</li>
			))}
		</ul>
	)
}
