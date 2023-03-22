import React, { useState } from "react";
import Loginform from "./Loginform";
import Registerform from "./Registerform";

export default function Login({cerrar}) {
  const [cambioform, setCambioform] = useState(false);

  const handeCambioform = () => {
    setCambioform(true);
  };

  return (
    <div className="grid grid-cols-1 grid-rows-[0fr,2fr] md:grid-rows-1 md:grid-cols-2  h-[90%]">
      <div className="border-r-2 h-0 flex justify-center items-center invisible w-0 md:h-full md:visible md:w-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/koro-b0465.appspot.com/o/Sys%2Fjuicy-boy-with-laptop.gif?alt=media&token=14f68dfa-04d4-47e0-bbd2-add7629f3bc2"
          alt=""
          className="w-full"
        />
      </div>
      <div className="justify-self-center  h-full flex flex-col">
        <img
          className="w-1/4 place-self-center"
          src="https://firebasestorage.googleapis.com/v0/b/koro-b0465.appspot.com/o/Sys%2Fcyborg-letter-k.png?alt=media&token=c410bc13-f4ce-4884-ae4e-6b548d00b12f"
        />
        {cambioform ? (
          <Registerform cerrar={cerrar} />
        ) : (
          <>
            <Loginform />
            <p className="text-lg md:text-xs text-center">
              Aun no estas registrado? Pulsa{" "}
              <button className="text-blue-700" onClick={handeCambioform}>
                Aqui
              </button>{" "}
            </p>
          </>
        )}
        <div className="w-full mt-3">
          <button className="bg-white  border-2 w-full flex justify-center rounded-lg drop-shadow-md active:translate-x-[1px] active:translate-y-[1px] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:transition-all">
            <img
              className="h-9"
              src="https://firebasestorage.googleapis.com/v0/b/koro-b0465.appspot.com/o/Sys%2Ficons8-google-48.png?alt=media&token=a859b706-f2a1-4624-948c-389dc13ead0c"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}
