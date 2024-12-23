import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider } from "../context/authContext";

import PrivateRoute from "./private.routes";
import PublicRoute from "./public.routes";
import { TaskProvider } from "../context/taskContext";
const Dashboard = lazy(()=> import('../pages/dashboard/Dashboard.page'));
const LoginPage = lazy(()=> import('../pages/loginPage/Login.page'));
const Register = lazy(()=> import('../pages/register/Register.page'));
const NotFound = lazy(()=> import('../pages/notFound/NotFound.page'));

const AppRoutes = () => {
    
    return (
        <Router>
           <AuthProvider>
                <TaskProvider>
                        <Suspense fallback={<div>loading...</div>}>
                                <Routes>
                                        <Route path="/" element={
                                            <PrivateRoute>
                                                <Dashboard/>
                                            </PrivateRoute>
                                            }/>
                                        <Route path="/login" element={
                                            <PublicRoute>
                                                <LoginPage/>
                                            </PublicRoute>
                                            }/>
                                        <Route path="/register" element={
                                            <PublicRoute>
                                                <Register/>
                                            </PublicRoute>
                                            }/>
                                        <Route path="*" element={<NotFound/>}/>
                                </Routes>
                        </Suspense>
                </TaskProvider>
           </AuthProvider>
        </Router>
    )
};

export default AppRoutes;