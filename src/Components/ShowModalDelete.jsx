import React, { useState } from 'react';
import '../styles/ShowModalDelete.css';

export const ShowModalDelete = ({IsModalDelete , setCerrarModalDelete, getDeleteUser , TempUser, setIsModalDelete , setAceptarCerrar}) => {

    

const getDelete = () =>{
    
    getDeleteUser('/users/', TempUser?.id)
    setIsModalDelete(false)
    setAceptarCerrar(true)
    
}

const getCancel = () =>{
    console.log('no')
    setIsModalDelete(false)
   
}
const getAceptar = () =>{

}


  return (
    <>
    <div className={`show-modal ${IsModalDelete && 'active'}`}>
      <div className='msg-modal'>
      <p>¿ are you sure you want to delete ?</p>
      <div className='show-modal-btn'>
      <button className='btn-modal'onClick={getDelete}>Yes</button>
      <button className='btn-modal' onClick={getCancel}>No</button>
      </div>
      </div>
    </div>

   
    </>
  )
}


