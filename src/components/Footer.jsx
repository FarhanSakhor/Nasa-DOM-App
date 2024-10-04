import React from 'react'

export default function (props) {
  const {showModal, toggleModal, data}= props

  return (
    <footer>
        <div className='backgroundGradient'></div>
        <div>
            <h1>Picture of The Day</h1>
            <h2>{data?.title}</h2>
            
        </div>
        <button onClick={toggleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
