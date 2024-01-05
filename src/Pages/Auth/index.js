import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Forgot from './Forgot'
import Reset from './Reset'

export default function Auth() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/forgot' element={<Forgot/>} />
            <Route path='/reset' element={<Reset/>} />
        </Routes>
        </>
    )
}
