import React, { useState } from "react";
import Errorhandler from "./Errorhandler";
import { auth } from "../../Firebase/Firebaseinit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDataContext } from "../../context/ContextUno";

export default function Registerform({ cerrar }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [confirmaremail, setConfirmaremail] = useState("");
  const [pass, setPass] = useState("");
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const { estalogedin, setEstalogedin, setEsNuevo } = useDataContext();

  const manejarNombre = (event) => {
    setNombre(event.target.value);
  };
  const manejarEmail = (event) => {
    setEmail(event.target.value);
  };
  const manejarPass = (event) => {
    setPass(event.target.value);
  };
  const manejarConfirmaremail = (event) => {
    setConfirmaremail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== confirmaremail) {
      return setErrorEmail(true);
    }
    if (pass.match(regex)) {
      cerrar();
      setEstalogedin(true);

      createUserWithEmailAndPassword(auth, email, pass).then(
        setTimeout(() => {
          setEsNuevo(true);
          // Código que se ejecuta después de esperar 3 segundos
        }, 3000)
      );
      console.log(`Email: ${email}, Password: ${pass}`);
    } else {
      setError(true);
      console.log("8char1mayu");
    }
  };

  return (
    <>
      <form
        className="p-4 w-full justify-self-center text-center text-2xl md:text-base "
        onSubmit={handleSubmit}
      >
        {/*Form de registro normal*/}
        <label className="text-left">
          <p>Nombre:</p>
          <input
            type={"text"}
            value={nombre}
            required
            onChange={manejarNombre}
            className={"bg-slate-100 w-full border-solid border-2 rounded-md"}
            pattern="^[a-zA-Z0-9 ]{4,18}$"
          ></input>
        </label>
        <label className="text-left">
          <p>Email:</p>
          <input
            type={"email"}
            value={email}
            required
            onChange={(e) => {
              manejarEmail(e);
              setError(false);
              setErrorEmail(false);
            }}
            className={"bg-slate-100 w-full border-solid border-2 rounded-md"}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          ></input>
        </label>
        <label className="text-left">
          <p>Confirmar Email:</p>
          <input
            type={"email"}
            value={confirmaremail}
            required
            onChange={(e) => {
              manejarConfirmaremail(e);
              setErrorEmail(false);
              setError(false);
            }}
            className={"bg-slate-100 w-full border-solid border-2 rounded-md"}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          ></input>
          {errorEmail ? <Errorhandler errorEmail={errorEmail} /> : <></>}
        </label>
        <label className="text-left">
          <p>Password:</p>
          <input
            type={"password"}
            value={pass}
            required
            onChange={(e) => {
              manejarPass(e);
              setError(false);
              setErrorEmail(false);
            }}
            className={"bg-slate-100 w-full border-solid border-2 rounded-md"}
            placeholder="Ejemplo: 'Password1'"
          ></input>
          {error ? <Errorhandler errorPass={error} /> : <></>}
        </label>
        <br></br>
        <button
          type="submit"
          className="bg-blue-500 my-1 w-full px-2 rounded-md shadow-sm text-white hover:bg-blue-800"
        >
          Registrar
        </button>
      </form>
    </>
  );
}
