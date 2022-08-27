import React from 'react'
import { Route,Routes,Redirect, BrowserRouter } from 'react-router-dom'
import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import routes from '../../routes/routes'
import Dashboard from '../../components/admin/Dashboard'
import Profile from '../../components/admin/Profile'
function MasterLayout() {
  return (
    <div className='sb-nav-fixed'>
        <Navbar/>
        <div id="layoutSidenav">
            
            <div id="layoutSidenav_nav">
                <Sidebar/>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route exact path='/profile' element={<Profile/>}/>
                    </Routes>
                    
                </main>
                <Footer/>
            </div>
        </div>
    </div>
    )
}

export default MasterLayout