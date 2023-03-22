import React from "react";
import { useDataContext } from "../../context/ContextUno";
import Loginmodal from "./Loginmodal";
import { auth } from "../../Firebase/Firebaseinit";

export default function Header() {
  const { estalogedin,setEstalogedin } = useDataContext();
  return (
    <div className="p-3 bg-slate-900 grid grid-cols-[1fr_5fr_1fr]">
      <img src="https://firebasestorage.googleapis.com/v0/b/koro-b0465.appspot.com/o/Sys%2Ficon.png?alt=media&token=9ff77e03-eba3-42fa-be15-80977ce20eb3" />
      <div className="text-center">Koro</div>
      <div>
        {estalogedin ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setEstalogedin(false)
              auth.signOut();
              console.log(auth)
            }}
          >
            Log Out
          </button>
        ) : (
          <Loginmodal />
        )}
      </div>
    </div>
  );
}
