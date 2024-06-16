import { useEffect, useState } from "react";
import { useCruds } from "./Hook/useCruds"
import { Form_Insert } from "./Components/Form_Insert";
import { ShowUsers } from "./Components/ShowUsers";
import {  ShowModalDelete } from './Components/ShowModalDelete';
import { ModalUserDeleted } from './Components/ModalUserDeleted';
import './styles/App.css';


export function App() {
  // star CerrarModalDelete, TempUser cerrar el modal de eliminar user
  const [ CerrarModalDelete ,  setCerrarModalDelete ] = useState()
  const [ TempUser, setTempUser ] = useState()
  //end

  const [ AceptarCerrar, setAceptarCerrar ] = useState(false);

  const [ IsModalDelete, setIsModalDelete ] = useState(false)

  const [ isModalFormEdd, setisModalFormEdd ] = useState(false)

  const [ IsActive, setIsActive ]= useState(false)
  const [ Update , setUpdate ] = useState();
  const [ ConsultarApi, getConsulApi, getInsertApi, getDeleteUser, getUpdateApiUsers ] = useCruds();
 

useEffect(()=>{
  getConsulApi('/users/');
},[])

const ShowFormulario = () =>{
  setUpdate()
  setIsActive(true)
  setisModalFormEdd(false)
}


  return (
    <>
    <div className="header">
    <h2>Users</h2>
    <button onClick={ShowFormulario}type="button">New User</button>
    </div>
   <ShowModalDelete
   IsModalDelete={ IsModalDelete }
   setIsModalDelete={ setIsModalDelete }  
   setCerrarModalDelete = { setCerrarModalDelete }
   TempUser ={ TempUser } 
   getDeleteUser = { getDeleteUser }
   setAceptarCerrar = { setAceptarCerrar }
   />
   <ModalUserDeleted
   
   AceptarCerrar={ AceptarCerrar }
   TempUser = { TempUser }
   setAceptarCerrar = {setAceptarCerrar}
   />

    <Form_Insert
    getInsertApi= { getInsertApi }
    Update={Update}
    setUpdate ={setUpdate}
    getUpdateApiUsers = { getUpdateApiUsers }
    IsActive={IsActive}
    setIsActive = {setIsActive}
    isModalFormEdd = { isModalFormEdd }
    />
     <div className="Contenedor-Cards">
     
      {
        ConsultarApi?.map((user)=>(
          <ShowUsers
          key={user.id}
          user={user}
          getDeleteUser= {getDeleteUser}
          setUpdate ={setUpdate}
          setIsActive = {setIsActive}
          setIsModalDelete={setIsModalDelete}
          IsModalDelete={ IsModalDelete }
          CerrarModalDelete= {  CerrarModalDelete }
          setCerrarModalDelete = { setCerrarModalDelete } 
          setTempUser = { setTempUser }
          setisModalFormEdd = { setisModalFormEdd }
          />
        )) 
      }


     </div>
  
    </>
  )
}

