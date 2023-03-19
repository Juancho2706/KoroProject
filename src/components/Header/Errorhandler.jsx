import React from "react";

export default function Errorhandler({errorEmail, errorPass}) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute text-xs"
      role="alert"
    >{errorEmail ? (<><strong className="font-bold">Confirmacion inválida:</strong>
    <span className="block sm:inline">
      Los emails tienen que coincidir.
    </span></>) : (<></>)}
    {errorPass ? (<><strong className="font-bold">Contraseña inválida:</strong>
      <span className="block sm:inline">
        La contraseña debe tener al menos 8 caracteres, incluir una letra
        mayúscula y un número.
      </span></>) : (<></>)}
      
    </div>
  );
}
