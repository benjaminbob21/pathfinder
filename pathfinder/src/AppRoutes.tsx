import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Show from "./pages/Show";

const AppRoutes = () => { 
    return (
        <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<Show/>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    );
}

export default AppRoutes;