import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthRoutes from './components/common/AuthRoutes';
import Courses from './pages/Courses/Courses';
const AppRouter = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<AuthRoutes><Dashboard /></AuthRoutes>} />
                <Route path="/courses/:courseId" element={<Courses />} />

            </Routes>
        </Router>
    );
};

export default AppRouter;
