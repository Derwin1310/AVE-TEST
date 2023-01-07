import React, { useContext, useState } from 'react'
import { store } from '../../context/store'
import { Modal } from '../modal/Modal'
import { ProductOverview } from './ProductOverview'

export const ProductItem = () => {
  const { productList, filteredProducts, input } = useContext(store)
  const [showModalItem, setShowModalItem] = useState(false)
  const [modalData, setModalData] = useState({})

  const handleItemView = (...item) => {
    setModalData(...item)
    setShowModalItem(true)
  }

  const productsToShow = input.length ? filteredProducts : productList
  return (
    <div className="products-list">
      {productsToShow.length && (
        productsToShow.map(({ id, title, image, price, description }) => (
          <article
            key={id}
            className="product"
          >
            <picture>
              <img
                className="product__img"
                src={image}
                alt={title}
              />
            </picture>
            <div className="product__info">
              <h3 className="product__name">{title}</h3>
              <h3 className="product__price">${price}</h3>
              <h5 className="product__more-info" onClick={() => handleItemView({ id, title, image, price, description })}>More info...</h5>
            </div>
          </article>
        ))
      )}
      {showModalItem && (
        <Modal showModal={showModalItem} setShowModal={setShowModalItem}>
          <ProductOverview data={modalData} />
        </Modal>
      )}
    </div>
  )
}
