import { Icon } from '@iconify/react'
import React, { useContext } from 'react'
import { store } from '../../context/store'

export const ProductOverview = ({ data }) => {
  const { id, title, image, price, description} = data
  const { favoriteProducts, effects: { handleFavorites } } = useContext(store)
  const isAdded = favoriteProducts.some(item => item.id === id)

  return (
    <article
      key={id}
      className="product-modal"
    >
      <picture>
        <img
          className="product-modal__img"
          src={image}
          alt={title}
        />
      </picture>
      <div className="product-modal__info">
        <h3 className="product-modal__name">Name: {title}</h3>
        <h3 className="product-modal__price">Price: ${price}</h3>
        <h5 className="product-modal__more-info">Details: {description}</h5>
        {

        }
        <button disabled={isAdded} className="product-modal__favorites">
          <h5>Add to favorites!</h5>
          <Icon onClick={() => handleFavorites(data)} icon='mdi:cards-heart' color='red' height={24} width={24}/>
        </button>
      </div>
    </article>
  )
}
