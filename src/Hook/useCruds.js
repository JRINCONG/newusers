import axios from "axios"
import { useState } from "react"


export const  useCruds = () => {

    const [ ConsultApi, setConsultApi ] = useState()


            const getConsulApi = (path) =>{
                const Url_link = 'https://users-crud.academlo.tech';

                const url=`${Url_link}${path}`;
                axios.get(url)
                .then(resp => setConsultApi(resp.data))
                .catch(error => console.log(error))
                
            }


            const getInsertApi = (path, data) => {
                 const Url_link = 'https://users-crud.academlo.tech';

                  const url = `${Url_link}${path}`;
                  console.log('data de insertar api',data)
                  axios.post(url, data)
                  .then(resp =>setConsultApi([...ConsultApi, resp.data]))
                  .catch(error => console.log(error))

                
            }


            const getDeleteUser = (path, id) =>{
                const Url_link = 'https://users-crud.academlo.tech';
                const url = `${Url_link}${path}${id}`;
                axios.delete(url)
                .then(() =>{
                    setConsultApi(ConsultApi.filter((user) => user.id !== id  ))
                })
                .catch(error => console.log(error))
            }


            const getUpdateApiUsers = (path, id, data) => {
                const Url_link = 'https://users-crud.academlo.tech';
                const url = `${Url_link}${path}/${id}/`;
                console.log(data)
                axios.patch(url,data)
                .then( resp => {
                    setConsultApi(ConsultApi.map(inf => inf.id === id ? data : inf ))
                })
                .catch(error => console.log(error))

            }
        

            return [ConsultApi , getConsulApi, getInsertApi, getDeleteUser, getUpdateApiUsers ]

}
