import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const logoutSubmit = (e) =>{
    e.preventDefault();
    axios.post(`/api/logout`).then(res=>{
      console.log(res.data.status)
      if(res.data.status === 200){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        navigate('/');
      }
    })
  }

  var AuthButton = '';
  if(!localStorage.getItem('auth_token')){
    AuthButton = (
      <ul className='navbar-nav'>
        <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
      </ul>
    )
  }else{
    AuthButton = (
      <li className="nav-item">
        <button type='button' onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white" >Logout</button>
      </li>
    )
  }

  return (
    
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
    <div className='container'>
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Collections</Link>
      </li>
      {AuthButton}
    </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Navbar