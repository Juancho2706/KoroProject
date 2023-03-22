import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import Content from "./components/Body/Content";
import Header from "./components/Header/Header";
import { useDataContext } from "./context/ContextUno";
import { auth } from "./Firebase/Firebaseinit";

function App() {
  const { setEstalogedin, estalogedin, setEsNuevo } = useDataContext();

  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setEstalogedin(true);
      setEsNuevo(false);
      console.log(auth, estalogedin, "IN");
      }else{
        setEstalogedin(false);
      setEsNuevo(false);
      console.log(auth);
      }
    })
       
  }, [auth]);

  return (
    <div className="bg-gray-400 text-lime-50 h-[100vh]">
      <Header />
      <Content />
    </div>
  );
}

export default App;
