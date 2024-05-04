import React from "react";
import './index.css'
import Navbar from "./components/Navbar";
 
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from "./components/Chat";

function App() {
  const [user]=useAuthState(auth);
  console.log(user)
  return (
   <div className="App">
    <div className="max-w-[1020px] text-center mx-auto ">
      <section className="flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative ">
      <Navbar/>
      {user? <Chat/> : null}
      </section>

    </div>
    
   </div>
  );
}

export default App;
