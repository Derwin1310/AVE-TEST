import "./styles.sass"

export const Modal = ({ children, showModal, setShowModal }) => {
  return (
    showModal && (
      <div className='modal-bg' onClick={() => setShowModal(false)}>
        {children}
      </div>
    )
  )
}
