import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../Config/firebase";
import { useState } from "react";
import FireBaseHome from "../Components/FirebaseHome/FireBaseHome";


const App = () => {
  return (
    <div>
      <FireBaseHome/>
    </div>
  );
};

export default App;