import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/Home";
import MasterLayout from "./layouts/admin/MasterLayout";
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['accept'] = 'application/json';
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/admin/*" element={<MasterLayout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
