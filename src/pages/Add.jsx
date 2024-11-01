import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
  const queryClient = useQueryClient() 
  const HTTP = import.meta.env.VITE_API
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [age, setAge] = useState("")
    

  function createStudent(body){
    return axios.post(`${HTTP}/students`, body)
  }

  const mutation = useMutation({
    mutationFn:createStudent,
    onSuccess:() =>{
      queryClient.invalidateQueries({queryKey:['students']})
      navigate(-1)
    }
  })

function handleSubmit(e){
  e.preventDefault()
  const data ={name,surname,age}
  mutation.mutate(data,{
 
  })
}

  return (
    <form onSubmit={handleSubmit} className='w-[400px] mx-auto mt-5 space-y-5 '>
      <Input value={name} onChange={(e) => setName(e.target.value)} size='large' allowClear placeholder='Enter name'/>
      <Input value={surname} onChange={(e) => setSurname(e.target.value)} size='large' allowClear placeholder='Enter surname'/>
      <Input value={age} onChange={(e) => setAge(e.target.value)} size='large' allowClear placeholder='Enter age'/>
      <Button htmlType='submit' className='w-full' size='large' type='primary'>Submit</Button>
    </form>
  )
}

export default Add