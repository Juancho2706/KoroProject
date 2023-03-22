import React from 'react'
import { useDataContext } from '../../context/ContextUno'
import { auth } from '../../Firebase/Firebaseinit'

export default function Newuser() {
    const {cambiarelnuevo} = useDataContext()
  return (
    <div>Newuser
        <h1>{auth.currentUser.displayName}{console.log(auth)}</h1>
        <button className='bg-slate-900 p-2 rounded-sm' onClick={(e)=>{cambiarelnuevo(false)}}>LISTO!</button>
    </div>
  )
}
