import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../Config/firebase";
import { useState } from "react";


const App = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, setuser] = useState(null)
  const googleSingUpHandaler =()=>{
    signInWithPopup(auth, provider)
    .then((res)=>{
      console.log(res.user);
      setuser(res.user)})
    .catch((error)=>console.log(error.message))
  }

  return (
    <div>
      <h1>{user?.displayName}</h1>
      <h2>{user?.email}</h2>
      <img src={user?.photoURL} alt="" />
      <button onClick={googleSingUpHandaler}>continue with google</button>
    </div>
  );
};

export default App;