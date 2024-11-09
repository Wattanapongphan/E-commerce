//rafce
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';


const Register = () => {
  //javascript
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleOnChange = (e) => {
    //code
    // console.log(e.target.name,e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      return alert("Confirm Password is Not match")
    }
    console.log(form)
    //send to back
    try {
      //code
      const res = await axios.post('http://localhost:5000/api/register', form)
      toast.success(res.data)
      console.log(res.data)
    } catch (err) {
      //err
      const errMsg = err.response?.data?.message
      toast.error(errMsg)
      console.log(err)
    }
  }


  return (
    <div>
      Register
      <form onSubmit={handleSubmit}>
        Email
        <input className='border'
          onChange={handleOnChange}
          name='email'
          type='email'
        />

        Password
        <input className='border'
          onChange={handleOnChange}
          name='password' type='text'
        />

        Confirm Password
        <input className='border'
          onChange={handleOnChange}
          name='confirmPassword' type='text'
        />

        <button className='bg-blue-500 rounded-md'>
          Register
        </button>

      </form>

    </div>
  )
}

export default Register