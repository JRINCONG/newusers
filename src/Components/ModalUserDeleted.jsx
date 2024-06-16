import React from 'react';
import '../styles/ModalUserDeleted.css';

export const ModalUserDeleted = ({ AceptarCerrar, TempUser, setAceptarCerrar }) => {

    const getAceptar = () => {
        setAceptarCerrar(false)
    }

  return (
    <div className={`cajaUserDelete ${AceptarCerrar && 'active'}`}>   
    <div className='User-Deleted'>
    <p className='informacion'>El Usuario : <span>{TempUser?.first_name}</span><span>{TempUser?.last_name}</span> Fue eliminado</p>
    <button className='btn'onClick={getAceptar}>Aceptar</button>
    </div>
</div>
  )
}


