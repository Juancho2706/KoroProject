import React, { useContext, useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

export default function ContextUno(props) {
  const [estalogedin, setEstalogedin] = useState(false); //saber si el usuario esta logged in
  const [esnuevo, setEsNuevo] = useState(false); //saber si el usuario es nuevo
  const cambiarelnuevo = (elvalor) => {
    setEsNuevo(elvalor);
  };

  const valor = { estalogedin, setEstalogedin, esnuevo, setEsNuevo, cambiarelnuevo };

  return (
    <DataContext.Provider value={valor}>{props.children}</DataContext.Provider>
  );
}

export function useDataContext() {
  //se hace la funcion principal para usar contexto
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
}
