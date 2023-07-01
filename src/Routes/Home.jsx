import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Components/utils/global.context'



const Home = () => {
  //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
  const{themeState, themeDispatch} = useDentistStates()


  return (
    <main className = {themeState.theme ? "App" : "dark"} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
          {dentistState.dentistList.map((dentist) => (<Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username}/>
          ))}
      </div>
    </main>
  )
}

export default Home