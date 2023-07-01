import axios from 'axios'
import { createContext, useContext, useState, useEffect, useReducer } from "react";

export const initialState = {theme: "",dentistList: [], dentistDetail: {}, fav: JSON.parse(localStorage.getItem("favs")) || []}

export const ContextGlobal = createContext();


const themes = {
  dark: {theme: false,
  },
  light: {theme: true,
  },
};

const initialThemeState = themes.light;


const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return themes.dark;
    case "LIGHT":
      return themes.light;
    default:
      throw new Error();
  }
};


const dentistReducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST":
      return {dentistList: action.payload, dentistDetail: state.dentistDetail};
    case "GET_DENTIST":
      return {dentistList: action.dentistList, dentistDetail: action.payload};
    case "ADD_FAV":
      return [...state, action.payload];
    default:
      throw new Error();
  }
};



//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
export const ContextGlobalProvider = ({children}) => {
  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialDentistState);



  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
    localStorage.setItem("favs", JSON.stringify(favState));
  }, [favState]);


  useEffect(() => {
    axios(url)
      .then((res => dentistDispatch({type: "GET_LIST", payload: res.data.results})))
  }, []);


  useEffect(() => {
    axios(url)
      .then((res) => dentistDispatch({type: "GET_DENTIST", payload: res.data}))
  }, []);

  return (
    <ContextGlobal.Provider
      value={{apiState, apiDispatch, favState, favDispatch, themeState, themeDispatch, details, setDetails,
      }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useDentistStates = () => useContext(ContextGlobal);