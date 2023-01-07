import { useState } from "react"
import { Modal } from "../modal/Modal"
import { OptionList } from "./OptionList"
import { OrderSelect } from "./OrderOptions"
import { ProductItem } from "./ProductItem"
import "./styles.sass"

export const Products = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <div className="list-container">
      <h2>Our best products</h2>
      {showDrawer && (
        <Modal showModal={showDrawer} setShowModal={setShowDrawer}>
          <OrderSelect />
        </Modal>
      )}
      <OptionList setShowDrawer={setShowDrawer} />
      <ProductItem />
    </div>
  )
}
