import React from 'react'
import Navbar from './Navbar'

export default function Layout({children,setOpen}) {
  return (
    <div>
      <Navbar setOpen={setOpen}/>
      {children}
    </div>
  )
}