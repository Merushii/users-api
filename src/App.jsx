import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UsersList from './components/UsersList'
import Navbar from './components/Navbar'
import ModalForm from './components/ModalForm'
import WelcomeCard from './components/welcomeCard'

//La url base de la api que se va a utilizar
const URL_BASE = "https://users-crud.academlo.tech/"
function App() {
  //Estado donde se guardan todos los usuarios
  const [users, setUsers] = useState([])
  //Estado que indica si el modal esta visible o no asignando un false por defecto, para ocultar el modal
  const [isShowModal, setIsShowModal] = useState(false)
  const [updatingUser, setUpdatingUser] = useState()

  //Funcion que cambial el estado del modal
  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
  }

  const createUser = (data) => {
    axios.post(`${URL_BASE}users/`, data)
    //Si la peticion es exitosa se ejecuta la funcion setUsers para cambiar el valor de users
      .then((res) => {
        getAllUsers()
        handleClickShowModal()
      })
      //En caso contrario se mostrará un mensaje de error
      .catch((err) => console.log(err))
  }

  const getAllUsers = () => {
    axios.get(`${URL_BASE}users/`)
    //Si la peticion es exitosa se ejecuta la funcion setUsers para cambiar el valor de users
      .then((res) => setUsers(res.data))
      //En caso contrario se mostrará un mensaje de error
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios.delete(`${URL_BASE}users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  }

  const updateUser = (data, id) => {
    axios.patch(`${URL_BASE}users/${id}/`, data)
    .then(() => {
      getAllUsers()
      handleClickShowModal()
    })
    .catch((err) => console.log(err));
  }

  //useEffect que obtiene todos los usuarios y se ejecuta cuando se renderiza el componente
  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
    <div className="App">
      {/* Se muestran todos los componentes*/}
      <nav className="nav">
        <Navbar handleClickShowModal={handleClickShowModal}/>
      </nav>
      <ModalForm isShowModal={isShowModal} handleClickShowModal={handleClickShowModal} createUser={createUser} updatingUser={updatingUser} updateUser={updateUser} setUpdatingUser={setUpdatingUser}/>
      
      <section className="welcome__userCard">
        {
          users.length === 0 ? <WelcomeCard/> : <UsersList users={users} deleteUser={deleteUser} setUpdatingUser={setUpdatingUser} handleClickShowModal = {handleClickShowModal}/>
        }
      </section>
    </div>
  )
}

export default App
