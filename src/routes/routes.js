import React from 'react'
import Dashboard from '../components/admin/Dashboard'
import Profile from '../components/admin/Profile'

const routes=[
    {
        path: "/admin/dashboard",
        element: <Dashboard/>
    },
    {
        path:"/admin/profile",
        element:<Profile/>
    }
]

export default routes