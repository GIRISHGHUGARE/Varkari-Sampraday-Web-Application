import React, { useEffect, useState } from 'react'
import Axios from 'axios';
const Cart = (cart) => {
    const [users, Cart] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5001/api/v1/admin/getUsers')
            .then(response => {
                console.log(response.data.usersData)
                Cart(response.data.usersData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <div className='container pt-5'>
                <div className='row border text-center fw-bold flex-nowrap'>
                    <div className="col-md-2 border text-nowrap overflow-hidden">_id</div>
                    <div className="col-md-2 border text-nowrap overflow-hidden">Name</div>
                    <div className="col-md-2 border text-nowrap overflow-hidden">Email</div>
                    <div className="col-md-2 border text-nowrap overflow-hidden">Password</div>
                    <div className="col-md-2 border text-nowrap overflow-hidden">CreatedAt</div>
                    <div className="col-md-2 border text-nowrap overflow-hidden">UpdatedAt</div>
                </div>
                {
                    users ? (users.map((user) => {
                        return (
                            <div key={user._id} className="row border text-center flex-nowrap">
                                <div className="col-md-2 border text-nowrap overflow-hidden">{user._id}</div>
                                <div className="col-md-2 border text-nowrap overflow-hidden">{user.name}</div>
                                <div className="col-md-2 border text-nowrap overflow-hidden">{user.email}</div>
                                <div className="col-md-2 border text-nowrap overflow-hidden">{user.password}</div>
                                <div className="col-md-2 border text-nowrap overflow-hidden">{user.createdAt}</div>
                                <div className="col-md-2 border text-nowrap overflow-hidden">{user.updatedAt}</div>
                            </div>
                        )
                    })) : (<h1>No users</h1>)
                }
            </div>
        </>
    )
}

export default Cart