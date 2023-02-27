import React from 'react'
import { Outlet } from 'react-router-dom'
import BackendHeader from './BackendHeader'
import BackendSidebar from './BackendSidebar'

const BackendLayout = () => {
  return (
    <> 
        {/* <BackendHeader/> */}
        <Outlet/>
        <BackendSidebar/>
    </>
  )
}

export default BackendLayout