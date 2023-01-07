import { createContext, useEffect, useState } from 'react'

export const store = createContext()

export const ContextProvider = ({ children }) => {
	const [productList, setProductList] = useState([])
	const [favoriteProducts, setFavoriteProducts] = useState([])
  const [isMobile, setIsMobile] = useState(window.screen.width < 768)
	const [input, setInput] = useState('')

	const URL_API = `https://fakestoreapi.com/products/`

	const fetchProducts = async (category = '') => {
		try {
			const getData = await fetch(`${URL_API}${category}`)
			const rawData = await getData.json()
			setProductList(rawData)
		} catch (error) {
			console.log('Error on fetchProducts :', error)
		}
	}

	const handleFavorites = (data) => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const listOfFavorites = [...favorites, data]
    localStorage.setItem('favorites', JSON.stringify(listOfFavorites));
		setFavoriteProducts(listOfFavorites)
  }

	useEffect(() => {fetchProducts()}, [])

  useEffect(() => {
    const resizer = () => {
      setIsMobile(window.screen.width < 768)
    }
    window.addEventListener('resize', resizer)

    return () => window.removeEventListener('resize', resizer)
  }, [])

	const getFilteredProducts = (query, list) => {
		const queryValue = query.toLowerCase().trim()

		if (!queryValue) return list

		const searchedProducts = list.filter(item => {
			const itemName = item.title.toLowerCase().trim()
			return itemName.includes(queryValue)
		})

		return searchedProducts
	}

	const filteredProducts = getFilteredProducts(input, productList)

	const initialState = {
		productList,
		input,
		filteredProducts,
    isMobile,
		favoriteProducts
	}

	const setStates = () => {
		return {
			setProductList,
			fetchProducts,
			setInput,
      setIsMobile,
			handleFavorites
		}
	}

	const state = {
		...initialState,
		effects: {
			...setStates()
		}
	}

	return <store.Provider value={state}>{children}</store.Provider>
}
