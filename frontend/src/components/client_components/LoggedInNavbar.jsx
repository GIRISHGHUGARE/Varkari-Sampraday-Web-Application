import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const LoggedInNavbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const onSubmit = async () => {
        try {
            
            const response = await Axios.post('http://localhost:5001/api/v1/auth/logout');
            const result = response;
            console.log(result);
            if (result.data.message == "Logged out successfully") {
                localStorage.removeItem('user');
                navigate("/");
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <>
            <nav className="navbar shadow bg-white rounded navbar-expand-lg bg-light" style={{ height: '80px' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: '20px' }}>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/dashboard"><i className="bi bi-person-circle" style={{ marginRight: '5px' }}></i>{user.name}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/dashboard/connections"><i className="bi bi-link" style={{ marginRight: '5px' }}></i>Connect</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/dashboard/products"><i className="bi bi-shop" style={{ marginRight: '5px' }}></i>Products</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <ul className="navbar-nav me-0" style={{ gap: '20px' }}>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5" to="/dashboard/cart">
                                        <i className="bi bi-cart" style={{ marginRight: '5px' }}></i>
                                        Cart
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5" onClick={onSubmit}>
                                        <i className="bi bi-person-plus" style={{ marginRight: '5px' }}></i>
                                        Logout
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

export default LoggedInNavbar