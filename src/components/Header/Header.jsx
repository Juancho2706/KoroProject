import React from "react";
import Loginmodal from "./Loginmodal";
import Registermodal from "./Registermodal";

export default function Header() {
  return (
    <div className="p-3 bg-slate-900 grid grid-cols-[1fr_5fr_1fr]">
      <p>Aqui va img</p>
      {/* <img src="https://firebasestorage.googleapis.com/v0/b/koro-b0465.appspot.com/o/Sys%2Ficon.png?alt=media&token=9ff77e03-eba3-42fa-be15-80977ce20eb3" /> */}
      <div className="text-center">Koro</div>
      <div>
        <Loginmodal />
      </div>
    </div>
  );
}
