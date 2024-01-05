import React from 'react'
import { Navigate, Route , Routes } from 'react-router-dom'
import Auth from './Auth'
import Frontentd from './Frontend'
import { useAuthContext } from 'Context/AuthContext'
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard'

export default function Index() {

  const {isAuth} = useAuthContext()
  console.log(isAuth)
  return (
    <>
    <Routes>
      <Route path='/*' element={<Frontentd/>}/>
      <Route path='/auth/*'  element={!isAuth?<Auth/>:<Navigate to={"/"}/>}/>
      <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard}/>}/>
      
    </Routes>
    </>
  )
} 
