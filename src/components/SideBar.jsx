import React from 'react'

export default function (props) {
  const {showModal, toggleModal, data}= props
  return (
    <div className='sidebar'>
      <div onClick={toggleModal} className='backgroundOverlay'></div>
      <div className='sidebarContents'>
        <h2>{data?.title}</h2>
        <div className='descriptionContainer'>
            <p className='descriptionTitle'>{data?.date}</p>
            <p>{data?.explanation}</p>
        </div>
        <button onClick={toggleModal} className=''>
          <i class="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  )
}
