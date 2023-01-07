import { useContext } from 'react'
import { store } from '../../context/store'
import { OrderSelect } from './OrderOptions'

export const OptionList = ({ setShowDrawer }) => {
  const { isMobile, favoriteProducts, effects: { setProductList } } = useContext(store)

  const showFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.length
      ? setProductList(favoriteProducts)
      : <p>You don't any favorites yet</p>
  }

  return (
    isMobile
    ?
    (<div className="btn-wrapper">
      <button className="btn-wrapper__option" onClick={() => setShowDrawer(true)}>Order by</button>
      <button className="btn-wrapper__option" onClick={showFavorites}>Favorites</button>
    </div>)
    :
    (<div className='btn-wrapper-desktop'>
      <OrderSelect />
      <button className={ isMobile ? "btn-wrapper__option" : "desktop"} onClick={showFavorites}>Favorites</button>
    </div>)
  )
}
