import { Button } from 'antd'
import { useFormik } from 'formik'
import React from 'react'
import { LoginSchema } from '../validation/loginSchema'
import { useNavigate } from 'react-router-dom'
import Home from './Home'

function Login() {
  const navigate =useNavigate()
  const {values,errors, handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues:{
      username:"",
      useremail:"",
      password:""
    },
    validationSchema:LoginSchema,
    onSubmit:(data) =>{
    console.log(values);
    navigate('/home')
      
    }
     })


  return (
    <form onSubmit={handleSubmit} className='w-[500px] mx-auto mt-5 flex flex-col bg-slate-400 p-4 rounded-md space-y-4'>
      <label className='w-[100%]'>
          <input value={values.username} onChange={handleChange} onBlur={handleBlur} id='username' name='username' className={`${errors.username && touched.username ? "border-red-500 placeholder:text-red-500" : ""} border-[1px] p-3 rounded-md w-full outline-none`} type="text" placeholder='Enter your name' />
          {touched.username && errors.username ? <span className='text-red-500'>{errors.username}</span> : ""}
       </label>
      <label className='w-[100%]'>
          <input value={values.useremail} onChange={handleChange} onBlur={handleBlur} id='useremail' name='useremail' className={`${errors.useremail && touched.useremail ? "border-red-500 placeholder:text-red-500" : ""} border-[1px] p-3 rounded-md w-full outline-none`} type="email" placeholder='Enter your email' />
           {touched.useremail && errors.useremail ? <span className='text-red-500'>{errors.useremail}</span> : ""}
       </label>
      <label className='w-[100%]'>
          <input value={values.password} onChange={handleChange} onBlur={handleBlur} id='password' name='password' className={`${errors.password && touched.password  ? "border-red-500 placeholder:text-red-500" : ""} border-[1px] p-3 rounded-md w-full outline-none`} type="password" placeholder='Enter your password' />
           {touched.password && errors.password ? <span className='text-red-500'>{errors.password}</span> : ""}
       </label>
       <Button htmlType='submit' className='w-full' size='large' type='primary'>Login</Button>
    </form>
  )
}

export default Login