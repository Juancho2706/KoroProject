import React, { useState } from "react";
import { auth } from "../../Firebase/Firebaseinit";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const manejarEmail = (event) => {
    setEmail(event.target.value);
  };

  //   createUserWithEmailAndPassword(auth,email,pass)

  return (
    <div>
      
      <form className="p-4">
        <label>
          <p>Email:</p>
          <input
            type={"text"}
            value={email}
            onChange={manejarEmail}
            className={"bg-slate-100 border-solid border-2 rounded-md"}
          ></input>
        </label>
      </form>
    </div>
  );
}
