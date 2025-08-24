import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import "../styles/app.style.css"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AppLayouts = () => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <div className="main">
          <Outlet/>
      </div>
    </>
  )
}

export default AppLayouts