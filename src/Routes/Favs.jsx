import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Components/utils/global.context";



const Favs = () => {
  //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
  const{ themeState, themeDispatch} = useDentistStates()

  return (
    <div className={themeState.theme ? "App" : "dark"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
          {favState.map((dentist) => (<Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))}
      </div>
    </div>
  );
};

export default Favs;
