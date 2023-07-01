import React, { useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useDentistStates } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const{dentistState, dentistDispatch} = useDentistStates()
  const {id}= useParams();
  
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url='https://jsonplaceholder.typicode.com/users' + id;


  useEffect(() => {
    axios(url)
      .then((res) => dentistDispatch({type: "GET_DENTIST", payload: res.data}))
  }, []);


  

  return (
    <div className={themeState.theme ? "Light" : "dark"}>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <h1>Detail Dentist {dentistSelected.id} </h1>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentistSelected.name}</td>
            <td>{dentistSelected.email}</td>
            <td>{dentistSelected.phone}</td>
            <td>{dentistSelected.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail