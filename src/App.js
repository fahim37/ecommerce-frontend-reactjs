import React, { useEffect, useState } from "react";
import {Routes,Route,Navigate} from 'react-router-dom'
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/Home";
import MasterLayout from "./layouts/admin/MasterLayout";
import axios from 'axios'
import AdminPrivateRoute from './AdminRoute'

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  function (config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to="/"/> : <Login/>}/>
          <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to="/"/> : <Register/>}/>
          <Route path="/admin/*" element={<AdminPrivateRoute/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
