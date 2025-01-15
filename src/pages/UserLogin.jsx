import React, { useState } from 'react'
import { Link, Links } from 'react-router-dom'

const UserLogin = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [user,setUser] =useState("")

  const submitform = (e)=>{
    e.preventDefault();
    setUser({
      email:email,
      password:password,
    })
  console.log(user)
  alert("LOGIN SUCCESSFULLY")
  setemail(" ")
  setpassword("")
  }



  return (
    <div className='p-5 h-screen flex flex-col justify-between '>
      <div>
        <h2 className='text-3xl font-bold  mb-8 ' style={{ fontFamily: 'Roboto' }}>
          <span className='text-yellow-500 mr-1'>Yellow</span>
          <span className='text-black ml-1'> Taxi</span>
        </h2>

        <form onSubmit={
          (e)=>{
            submitform(e)
          }
        }>

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
            required type='email' placeholder='email@example,com' />

          <h3 className='text-lg font-medium mb-2'>Enter password </h3>
          <input
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)

            console.log(e.target.value)
          }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
            required type='password' placeholder='password' />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base ' >Login</button>

        </form>
        <p className='text-center'> New here?
          <Link to="/signup" className='text-blue-400'> Create new Account</Link>
        </p>
      </div>
      <div>
        <Link
        to="/captain-login"
          className='bg-[#f59e0b] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base ' >Sign in  as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin