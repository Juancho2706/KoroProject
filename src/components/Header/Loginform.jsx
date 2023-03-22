import React, { useState } from "react";

export default function Loginform() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const [error, setError] = useState(false);
  
    const manejarEmail = (event) => {
      setEmail(event.target.value);
    };
    const manejarPass = (event) => {
      setPass(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if (pass.match(regex)) {
        console.log(`Email: ${email}, Password: ${pass}`);
      } else {
        setError(true);
        console.log("8char1mayu");
      }
    };
  return (
    <>
      <form
        className="p-4 w-full justify-self-center text-center text-3xl md:text-base"
        onSubmit={handleSubmit}
      >
        {/*Form de login normal*/}
        <label className="text-left">
          <p>Email:</p>
          <input
            type={"email"}
            value={email}
            required
            onChange={manejarEmail}
            className={"bg-slate-100 w-full border-solid border-2 rounded-md"}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          ></input>
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
            }}
            className={"bg-slate-100 w-full border-solid border-2 rounded-md"}
            placeholder="Ejemplo: 'Password1'"
          ></input>
          {error ? (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute text-xs"
              role="alert"
            >
              <strong className="font-bold">Contraseña inválida:</strong>
              <span className="block sm:inline">
                La contraseña debe tener al menos 8 caracteres, incluir una
                letra mayúscula y un número.
              </span>
            </div>
          ) : (
            <></>
          )}
        </label>
        <br></br>
        <button
          type="submit"
          className="bg-blue-500 my-1 w-full px-2 rounded-md shadow-sm text-white hover:bg-blue-800"
        >
          Log In
        </button>
      </form>
    </>
  );
}
