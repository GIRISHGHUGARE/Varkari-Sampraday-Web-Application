import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <nav className="navbar shadow bg-white rounded navbar-expand-lg bg-light" style={{ height: '80px' }}>
            <div className="container-fluid">
                <Link className="navbar-brand rounded" to="/admin"><img className="w-100" style={{ maxHeight: '70px' }} src='../images/LordVitthal.png' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: '20px' }}>
                        <li className="nav-item">
                            <Link className="nav-link active fs-5" aria-current="page" to="/admin/users"><i className="bi bi-people" style={{ marginRight: '5px' }}></i>Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/admin/products"><i className="bi bi-cart3" style={{ marginRight: '5px' }}></i>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/admin/stories"><i className="bi bi-file-text" style={{ marginRight: '5px' }}></i>Stories</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link fs-5" to="/dashboard/stories"><i className="bi bi-file-text" style={{ marginRight: '5px' }}></i>Stories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/dashboard/products"><i className="bi bi-shop" style={{ marginRight: '5px' }}></i>Products</Link>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <ul className="navbar-nav me-0" style={{ gap: '20px' }}>
                            <li className="nav-item">
                                <Link className="nav-link fs-5">
                                    <i className="bi bi-person-plus" style={{ marginRight: '5px' }}></i>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavbar