import React, { useState } from "react";
import Login from "./Login";

export default function Loginmodal() {
  const [modal, setModal] = useState(false);
  const mostrarModal = () => {
    setModal(true);
  };
  const cerrarModal = () => {
    setModal(false);
  };
  return (
    <div>
      <button
        className="bg-blue-500 px-2 rounded-md shadow-sm hover:bg-blue-800"
        onClick={mostrarModal}
      >
        Log In
      </button>
      {modal ? (
        <>
          <div className="transition-opacity fixed bg-black h-full w-full top-0 left-0 z-10 opacity-75"></div>
          <div className="bg-white flex flex-col text-black rounded-md fixed left-6 top-1/8 border-solid border-2 w-[90%] h-5/6 z-20 opacity-100 md:left-[min(25%,100vh)] md:top-1/4 md:w-[min(50%,75%)] md:h-2/4">
            <button
              className="bg-black px-2 text-white relative self-end rounded-md my-1"
              onClick={cerrarModal}
            >
              X
            </button>
            <Login cerrar={cerrarModal} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
