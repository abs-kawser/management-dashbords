import React from 'react'
import { FrontendAbout, FrontendFooter, FrontendNavbar } from '../Pages/FrontendPagesList';

const FrontendLayouts = () => {
  return (
    <div>
        <FrontendNavbar/>
        <FrontendAbout/>
        <FrontendFooter/>
    </div>
  )
}

export default FrontendLayouts;