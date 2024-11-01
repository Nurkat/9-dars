import {} from 'react'

import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Add, Home, Login, Single } from './pages'

function App() {


  return (
    <>
    <header className='py-5 bg-slate-200 flex justify-center items-center gap-5 '>
      <Link className='font-bold text-[20px]' to={'/'}>Home</Link>
      <Link className='font-bold text-[20px]' to={'/add'}>Create</Link>
    </header>
     <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/:id' element={<Single/>}/>
        <Route path='/' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
