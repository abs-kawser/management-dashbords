import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className='d-flex justify-content-center mt-3'>
    <ul><li className='li__style'><Link className='link__style'  >Home</Link></li></ul>
    <ul><li className='li__style' ><Link className='link__style'>About</Link></li></ul>
    <ul><li className='li__style' ><Link  className='link__style'>Contact</Link></li></ul>
    <ul><li className='li__style' ><Link  className='link__style' to='dashboard'>Dashboard</Link></li></ul>
   </div>
  )
}
export default Navbar