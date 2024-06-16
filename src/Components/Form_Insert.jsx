import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {Upload} from '../firebase/config';
import { update } from 'firebase/database';
import '../styles/Form.css';

let subida ='';

const textfile = async (even)=>{
  let ruta = even.target.files[0];            
  subida = await Upload(ruta);

  }



export const Form_Insert = ({ getInsertApi,  Update,   IsActive, getUpdateApiUsers, setIsActive, setUpdate, isModalFormEdd }) => {

            const { register, handleSubmit, reset } = useForm();



  useEffect(()=>{
    
   (!subida) ? Update?.image_url : subida
  
    reset(Update)

  },[Update])          

  
  const ShowForm =() => {
    setIsActive(false)
    reset(
      {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
      image_url:'',
      
  }
 )

  }

            const Submit = (data) => {
              console.log('informacion de la data dentro del submit',data)
              if(Update){
                (!subida) ? subida='https://firebasestorage.googleapis.com/v0/b/fotos-user.appspot.com/o/1.png?alt=media&token=5256d0b7-aca0-450e-a718-01058cdeff02': 
               
                data.image_url = subida;                
                getUpdateApiUsers('/users/', Update.id, data)
                setUpdate()
                setIsActive(false)
                reset(
                  {
                  email: '',
                  password: '',
                  first_name: '',
                  last_name: '',
                  birthday: '',
                  image_url:'',
                  
              }
             )
                subida='';

              }else{
                
                (!subida) ? subida = 'https://firebasestorage.googleapis.com/v0/b/fotos-user.appspot.com/o/1.png?alt=media&token=5256d0b7-aca0-450e-a718-01058cdeff02': 
                console.log('esta es subida despues del operador ternario',subida)
                data.image_url = subida;
               
                getInsertApi( '/users/', data )
               
                setIsActive(false)
                setUpdate()
                subida=''
              }            
                
                  reset(
                    {
                    email: '',
                    password: '',
                    first_name: '',
                    last_name: '',
                    birthday: '',
                    image_url:'',
                    
                }
               )
            }

  return (
    <div>
      
      <div className={`Contenedor-Form ${ IsActive && 'active' }`}>
      
      <form  className ='form-form'onSubmit={handleSubmit(Submit)}>
      
        <div className='btn-cerrar'>
       
        <button onClick={ShowForm}className= 'btn-btn-cerrar'type='button'>X</button>
        </div>
            <h1>{isModalFormEdd ? 'Edit User' : 'New User'}</h1>
                <div className='Form_items'>
                    <label htmlFor="email">Email:</label>
                    <input {...register('email')} type='email' id='email' autoFocus required/>
                </div>

                <div className='Form_items'>
                    <label htmlFor="password">Password:</label>
                    <input {...register('password')} type='password' id='password' required/>
                </div>
                
                <div className='Form_items'>
                    <label htmlFor="first_name">First Name:</label>
                    <input {...register('first_name')} type='text' id='first_name' required/>
                </div>

                <div className='Form_items'>
                    <label htmlFor="last_name">Last Name:</label>
                    <input {...register('last_name')} type='text' id='last_name' required/>
                </div>
                
                <div className='Form_items'>
                    <label htmlFor="birthday">Birthday:</label>
                    <input {...register('birthday')} type='date' id='birthday'/>
                </div>

                <div className='Form_items'>
                    <label htmlFor="image_url">Upload Photo:</label>
                    <input  onChange={textfile} type='file' id='image_url' />

                </div>


               
                <button className='btn-form'>{isModalFormEdd ? 'Edit Users':'New User'}</button>




       

      </form>
      
      </div>
    </div>
  )
}


