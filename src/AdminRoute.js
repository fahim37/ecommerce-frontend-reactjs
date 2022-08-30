import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import MasterLayout from './layouts/admin/MasterLayout'
import swal from 'sweetalert'

function AdminPrivateRoute() {

  const [Authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  let navigate = useNavigate()
  useEffect(()=>{
    axios.get(`api/checkingAuthenticated`).then(res=>{
      if(res.status===200){
        setAuthenticated(true)
      }
      setLoading(false);
    })
    return()=>{
      setAuthenticated(false)
    }
  },[])
  axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
    if(err.response.status === 401){
        swal("Unauthorized",err.response.data.message,"warning")
        navigate('/')
    }
    return Promise.reject(err)
  })
  if(loading){
    return <h1>Loading Please Wait...</h1>
  }
  return (
    <Routes>
    <Route path="/*" element={Authenticated ? <MasterLayout/> : <Navigate to="/login"/>}/>
    </Routes>
  )
}

export default AdminPrivateRoute