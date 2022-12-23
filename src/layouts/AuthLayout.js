import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import withAuth from '../components/hoc/withAuth'

const AuthLayout = ({ isLoggedIn, ...props }) => <WithAuthLayout {...props} replace {...{ to: '/dashboard' }} />
export default AuthLayout

const WithAuthLayout = withAuth(Outlet, Navigate)