import React from "react";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const loguearse = () => {
    signInAnonymously(getAuth()).then(usuario => console.log(usuario));
  }


  const activarMensajes = async () => {
    const token = await getToken(messaging, {
      vapidKey: "BHj389OI2X1dGP2qy3pxg7LxmP8HLL7nS1VFzHg-eOhg7dPdT8K1mD8TKdOUd1go1uOdaCO2LL-0nJYWNjyFeA4"
    }).catch(error => console.log("Tuviste un error al generar el token, papá"));


    if (token) console.log("tu token:", token);
    if (!token) console.log("no tienes token, rey");
  }

  React.useEffect(() => {
    const unsubscribe = onMessage(messaging, message => {
      console.log("tu mensaje:", message);
      toast(message.notification.title);
    })

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div>
      <h1>Wenas</h1>

      <ToastContainer />
      <button onClick={loguearse}> Loguearse</button>
      <button
        onClick={activarMensajes}
      > Recibir noti</button>

    </div>
  );
}

export default App;
