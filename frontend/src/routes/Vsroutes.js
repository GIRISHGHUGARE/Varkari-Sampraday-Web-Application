import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/auth_pages/Login';
import SignUp from '../pages/auth_pages/SignUp';
import Home from '../pages/client_pages/Home';
import About from '../pages/client_pages/About';
import Stories from '../pages/client_pages/Stories';
import Products from '../pages/client_pages/Products';
import Features from '../pages/client_pages/Features';
import Layout from '../components/client_components/Layout';
import LoggedInLayout from '../components/client_components/LoggedInLayout';
import Dashboard from '../pages/client_pages/Dashboard';
import Admin from '../pages/admin_pages/Admin';
import AdminLayout from '../components/admin_components/AdminLayout';
import AddProduts from '../components/admin_components/AddProducts';
import AddStories from '../components/admin_components/AddStories';
import ViewUsers from '../components/admin_components/ViewUsers';
import Cart from '../pages/client_pages/Cart';

const Vsroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}></Route>
        <Route path='/login' element={<Layout><Login/></Layout>}></Route>
        <Route path='/signup' element={<Layout><SignUp/></Layout>}></Route>
        <Route path='/about' element={<Layout><About/></Layout>}></Route>
        <Route path='/stories' element={<Layout><Stories/></Layout>}></Route>
        <Route path='/products' element={<Layout><Products/></Layout>}></Route>
        <Route path='/features' element={<Layout><Features/></Layout>}></Route>
        <Route path='/dashboard' element={<LoggedInLayout><Dashboard/></LoggedInLayout>}></Route>
        <Route path='/dashboard/products' element={<LoggedInLayout><Products/></LoggedInLayout>}></Route>
        <Route path='/dashboard/stories' element={<LoggedInLayout><Stories/></LoggedInLayout>}></Route>
        <Route path='/dashboard/cart' element={<LoggedInLayout><Cart/></LoggedInLayout>}></Route>
        <Route path='/dashboard/features' element={<LoggedInLayout><Features/></LoggedInLayout>}></Route>
        <Route path='/admin' element={<AdminLayout><Admin/></AdminLayout>}></Route>
        <Route path='/admin/products' element={<AdminLayout><AddProduts/></AdminLayout>}></Route>
        <Route path='/admin/stories' element={<AdminLayout><AddStories/></AdminLayout>}></Route>
        <Route path='/admin/users' element={<AdminLayout><ViewUsers/></AdminLayout>}></Route>
      </Routes> 
    </>
  )
}

export default Vsroutes