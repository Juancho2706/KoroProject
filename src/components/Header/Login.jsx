import React, { useState } from "react";
import { auth } from "../../Firebase/Firebaseinit";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const manejarEmail = (event) => {
    setEmail(event.target.value);
  };

  //   createUserWithEmailAndPassword(auth,email,pass)

  return (
    <div>
      <form>
        <label>
          Email:
          <input type={"text"} value={email} onChange={manejarEmail}></input>
        </label>
      </form>
    </div>
  );
}
