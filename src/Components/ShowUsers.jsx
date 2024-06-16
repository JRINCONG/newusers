import React from 'react';
import '../styles/ShowUsers.css';

export const ShowUsers = ({ user, getDeleteUser, setUpdate,  setIsActive, setIsModalDelete, CerrarDelete,  CerrarModalDelete, setTempUser, setisModalFormEdd  }) => {

  
 
const DeleteUser= () =>{
  setIsModalDelete(true)
  setTempUser(user)
}

const UpdateForm = ()=>{
  setisModalFormEdd(true)
  setUpdate(user)
  setIsActive(true)

}


   
  return (
    
    <div className='Users-card'>
      
          <div className='Users-card-title'>
          <h1><span>{user.first_name}</span><span>{user.last_name}</span></h1>
          </div>

          <div className='User-conted-hr1'>            
            <hr/>         
          
          </div>

          <div className='Users-card-conten-img'>
            <img className='Users-card-conten-img-img' src={user.image_url}/>
          </div>

          
           <div className='User-conten-items'>
            <ul className='Userd-items'>
            <li className='Userd-li'><span className='Userd-li1'>Correo</span><br></br><span>{user.email}</span></li>
            <li className='Userd-li'><span className='Userd-li2'>Cumpleaños </span><br></br><span>{user.birthday}</span></li>            
            </ul>
            </div>
            <div className='User-conted-hr'>
            <hr/>
            </div>
       
          <div className='Userd-Card-btn'>
            <button onClick={DeleteUser}className='btn-btn'><ion-icon name="trash-outline"className='btn-btn'></ion-icon></button>
            <button onClick={UpdateForm} className='btn-btn1'><ion-icon name="create-outline"></ion-icon>
            </button>
          </div>
          
    </div>
  )
}


