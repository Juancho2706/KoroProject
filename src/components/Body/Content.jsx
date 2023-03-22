import React from "react";
import { useDataContext } from "../../context/ContextUno";
import Newuser from "../Header/Newuser";
import Loading from "../Loading";
import Initialhome from "./Initialhome";

export default function Content() {
  const { estalogedin, esnuevo } = useDataContext();
  return (
    <div className="flex relative top-1/3 ">
      {estalogedin ? <>{esnuevo ? <Newuser /> : <Loading />}</> : <Initialhome/>}
    </div>
  );
}
