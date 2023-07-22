import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const AppRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />}  />
                <Route path='/entrar' element={<Login />}  />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}