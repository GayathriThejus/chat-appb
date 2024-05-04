import React from 'react'
import {auth} from "../firebase"
const Logout = () => {
    const signOut=()=>{
        signOut(auth)
    }
  return (
    <div>
        <button onClick={()=>{auth.signOut()}} className='bg-gray-100 px-4 py-2'>Logout</button>
    </div>
  )
}

export default Logout