import React from 'react'
import { useDentistStates } from './utils/global.context'



const Navbar = () => {
  //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
  const{themeState, themeDispatch} = useDentistStates();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: "DARK" });
    } else {
      themeDispatch({ type: "LIGHT" });
    }
  };

  return (
    <nav>
      <div className="odontoLogo">
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <h2 className="logoD">D</h2>
        <h2 className="logoH">H</h2>
        <h2>Odonto</h2>
      </div>
      <div className="navLinks">
        <Link to={routes.home}>
          <h3>Inicio</h3>
        </Link>
        <Link to={routes.contact}>
          <h3>Contact</h3>
        </Link>
        <Link to={routes.favs}>
          <h3>Favorites</h3>
        </Link>
      </div>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={switchTheme}>
        {themeState.theme ? "🌚" : "🌞"}
      </button>
    </nav>
  )
}

export default Navbar