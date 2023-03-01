import React from 'react'
import "./styles/welcomeCard.css"

const welcomeCard = () => {
  return (
    <div className='welcomeCard'>
      <h1 className='welcomeCard__title'>Welcome</h1>
      <p className='welcomeCard__message'>There are no users to see, please add a new user</p>
    </div>
  )
}

export default welcomeCard