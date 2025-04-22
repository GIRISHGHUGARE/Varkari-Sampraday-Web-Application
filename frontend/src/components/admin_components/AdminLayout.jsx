import React from 'react'
import AdminNavbar from './AdminNavbar'

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className=''>
                <AdminNavbar />
                <main className=''>
                    {children}
                </main>
            </div>
        </>
    )
}

export default AdminLayout