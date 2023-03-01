import React from 'react'
import "./styles/navbar.css"

const Navbar = ({handleClickShowModal}) => {

  
  return (
    <nav className='navbar'>
      <h2 className='navbar__title'>Users CRUD</h2>
      {/* Boton que al oprimir nos muestra el formulario para agregar un nuevo usuario */}
      <button className='navbar__addBtn' onClick={handleClickShowModal}><i className='bx bxs-user-plus'></i> New User</button>
    </nav>
  )
}

export default Navbar