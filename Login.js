import React, { useState } from 'react'

function Login() {
const[phone,setphone]=useState('');
  return (
    <div>
        <label>phone</label>
        <input type='text' onChange={(e)=>setphone(e.target.value)} value={phone}></input>
        <button>continue</button>
    </div>
  )
}

export default Login