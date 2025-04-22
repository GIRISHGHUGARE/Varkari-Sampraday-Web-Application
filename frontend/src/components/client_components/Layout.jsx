import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <div className=''>
        <Navbar />
        <main className=''>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout;


