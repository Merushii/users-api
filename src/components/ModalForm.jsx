import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/modalForm.css"

const defaultValues = {first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",};

const ModalForm = ({isShowModal, handleClickShowModal, createUser, updatingUser, updateUser, setUpdatingUser}) => {

  const{register, handleSubmit, reset} = useForm()

  const submit = (data) => {
    if(updatingUser){
      updateUser(data, updatingUser.id)
    }else{
      createUser(data)
    }
    reset(defaultValues);
  };

  const handleClickClose = () => {
    handleClickShowModal()
    reset(defaultValues)
    setUpdatingUser()
  }

  useEffect(() => {
    if(updatingUser) {
      reset(updatingUser)
    }
  }, [updatingUser])
  
  return (
    <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
      {/* Formulario */}
      
      <form onSubmit={handleSubmit(submit)} className='modalForm__form'>
      <div className="modalForm__header">
        
          <h3 className='modalForm__title'>{updatingUser ? "Edit user" : "New User"}</h3>
          <i onClick={handleClickClose} className='modalForm__title bx bx-x-circle'></i>
      </div>
        
        <div className='modalForm__div'>
          <label className='modalForm__label' htmlFor="">First name:</label>
          <input className='modalForm__input' type="text" {...register("first_name")}/>
        </div>

        <div className='modalForm__div'>
          <label className='modalForm__label' htmlFor="">Last name:</label>
          <input className='modalForm__input' type="text" {...register("last_name")}/>
        </div>

        <div className='modalForm__div'>
          <label className='modalForm__label' htmlFor="">Email:</label>
          <input className='modalForm__input' type="email" {...register("email")}/>
        </div>

        <div className='modalForm__div'>
          <label className='modalForm__label' htmlFor="">Password:</label>
          <input className='modalForm__input' type="password" {...register("password")}/>
        </div>

        <div className='modalForm__div'>
          <label className='modalForm__label' htmlFor="">Birthday:</label>
          <input className='modalForm__input' type="date" {...register("birthday")}/>
        </div>
          <button className='modalForm__btn'>{updatingUser ? "Save changes" : "Add new user"}</button>
      </form>
    </section>
  )
}

export default ModalForm