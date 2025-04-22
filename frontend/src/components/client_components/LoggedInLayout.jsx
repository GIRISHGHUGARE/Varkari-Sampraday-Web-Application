import React from 'react'
import LoggedInNavbar from '../client_components/LoggedInNavbar';
import Footer from "./Footer"

const LoggedInLayout = ({children}) => {
  return (
    <div className=''>
        <LoggedInNavbar />
        <main className=''>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default LoggedInLayout