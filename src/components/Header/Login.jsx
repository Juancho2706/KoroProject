import React, { useState } from "react";
import { auth } from "../../Firebase/Firebaseinit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Loginform from "./Loginform";
import Registerform from "./Registerform";

export default function Login() {
  const [cambioform, setCambioform] = useState(false);

  const handeCambioform = () => {
    setCambioform(true);
  };

  //   createUserWithEmailAndPassword(auth,email,pass)

  return (
    <div className="grid grid-cols-1 grid-rows-[0fr,2fr] md:grid-rows-1 md:grid-cols-2  h-[90%]">
      <div className="border-r-2 h-0 flex justify-center items-center invisible w-0 md:h-full md:visible md:w-full">
        {/*imagen de la izquierda*/}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/koro-b0465.appspot.com/o/Sys%2Fjuicy-boy-with-laptop.gif?alt=media&token=14f68dfa-04d4-47e0-bbd2-add7629f3bc2"
          alt=""
          className="w-full"
        />
      </div>
      <div className="justify-self-center  h-full flex flex-col">
        <img className="w-1/4 place-self-center" src="https://firebasestorage.googleapis.com/v0/b/koro-b0465.appspot.com/o/Sys%2Fcyborg-letter-k.png?alt=media&token=c410bc13-f4ce-4884-ae4e-6b548d00b12f" />
        {cambioform ? (
          <Registerform />
        ) : (
          <>
            <Loginform />
            <p className="text-xs text-center">
              Aun no estas registrado? Pulsa{" "}
              <button className="text-blue-700" onClick={handeCambioform}>
                Aqui
              </button>{" "}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
