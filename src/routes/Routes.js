import React, { lazy } from 'react'
import { retry } from '../utils/functions'

const Login = lazy(() => retry(() => import('../components/login/Login')))
const Dashboard = lazy(() => retry(() => import('../components/admin/Dashboard')))
const Profile = lazy(() => retry(() => import('../components/admin/profile')))
const UserManagement = lazy(() => retry(() => import('../components/admin/user-management')))
const Devices = lazy(() => retry(() => import('../components/admin/devices')))

export const Routes = [
    {
        id: 'login',
        path: '/login',
        isAuth: true,
        element: <Login />,
        exact: true
    },
    {
        id: 'main_login',
        path: '/',
        isAuth: true,
        element: <Login />,
        exact: true
    },
    {
        id: 'dashboard',
        path: '/dashboard',
        isAdmin: true,
        element: <Dashboard />,
        exact: true
    },
    {
        id: 'profile',
        path: '/profile',
        isAdmin: true,
        element: <Profile />,
        exact: true
    },
    {
        id: 'devices',
        path: '/devices',
        isAdmin: true,
        element: <Devices />,
        exact: true
    },
    {
        id: 'user-management',
        path: '/user-management',
        isAdmin: true,
        element: <UserManagement />,
        exact: true
    }
]


export const authRoutes = () => Routes.filter((value) => value?.isAuth)
export const adminRoutes = () => Routes.filter((value) => value?.isAdmin)

