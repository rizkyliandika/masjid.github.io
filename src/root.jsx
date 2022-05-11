import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Login } from './components/admin-page/auth/login';
import { Dashboard } from './components/admin-page/dashboard';
import JsonData from "./data/data.json";



export const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/dashboard' element={<Dashboard data={JsonData.UserData} />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}