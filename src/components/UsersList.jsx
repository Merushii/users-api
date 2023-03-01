import React from 'react'
import UserCard from './UserCard'
import "./styles/userList.css"

const UsersList = ({users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  return (
    <section className='userList'>
          {
            //Mapeo de los usuarios para mostrar uno por uno con sus respectivas propiedades, a traves del componente UserCard
            users.map(user => (
              <UserCard key={user.id} user={user} deleteUser={deleteUser} setUpdatingUser={setUpdatingUser} handleClickShowModal={handleClickShowModal}/>
            ))  
          }
      </section>
  )
}

export default UsersList