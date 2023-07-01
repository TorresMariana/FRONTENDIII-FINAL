import React from "react";
import { useDentistStates } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const{dentistState, dentistDispatch} = useDentistStates()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dentistDispatch({type: "ADD_FAV", Payload: dentistState.dentistList})
  }

  return (
    <div className = "card" key={id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="doctor-img" src="./images/doctor.jpg" alt="DH-logo" />
        <h3>{id}</h3>
        <h2>{name}</h2>
        <h3>{username}</h3>
      

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link key={id} to={"/dentista/" + id}>
          Details
        </Link>
        <button onClick={addFav} className="favButton">
          💙
        </button>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
