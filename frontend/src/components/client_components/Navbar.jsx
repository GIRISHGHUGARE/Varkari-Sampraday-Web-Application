import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar shadow bg-white rounded navbar-expand-lg bg-light" style={{ height: '80px' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand rounded" to="/"><img className="img-fluid w-100" style={{ maxHeight: '70px' }} src='./images/LordVitthal.png' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white text-black" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: '20px' }}>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/"><i className="bi bi-house" style={{ marginRight: '5px' }}></i>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/about"><i className="bi bi-info-circle" style={{ marginRight: '5px' }}></i>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/features"><i className="bi bi-grid" style={{ marginRight: '5px' }}></i>Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/stories"><i className="bi bi-file-text" style={{ marginRight: '5px' }}></i>Stories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/products"><i className="bi bi-shop" style={{ marginRight: '5px' }}></i>Products</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <ul className="navbar-nav me-0" style={{ gap: '20px' }}>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5" to="/login">
                                        <i className="bi bi-box-arrow-in-right" style={{ marginRight: '5px' }}></i>
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5" to="/signup">
                                        <i className="bi bi-person-plus" style={{ marginRight: '5px' }}></i>
                                        SignUp
                                    </Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar