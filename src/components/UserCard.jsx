import React from 'react'
import "./styles/userCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }
  return (
    <div className='userCard'>
      <article className='userCard__section'>
          <h3 className='userCard__name'>{user.first_name} {user.last_name}</h3>
          <ul className='userCard__ul'>
              <li><span>Email: </span>{user.email}</li>
              <li><span>Birthday: </span>{user.birthday}</li>
          </ul>
          <footer>
              <button className='userCard__btn' onClick={() => deleteUser(user.id)}>Delete</button>
              <button className='userCard__btn' onClick={handleClickEdit}>Edite</button>
          </footer>
      </article>
    </div>
  )
}

export default UserCard