import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import AdminLayout from '../layouts/AdminLayout'
import NotFound from '../components/not-found/not-found'
import { adminRoutes, authRoutes } from './Routes'

const Routing = ({...props}) => {
  return (
    <Routes {...props} >
      <Route path='/' element={<AuthLayout/>} >
        {authRoutes()?.map(({id, ...otherProps}) => <Route index key={id} {...otherProps} />)}
      </Route>
      <Route path='/' element={<AdminLayout/>} >
        {adminRoutes()?.map(({id, ...otherProps}) => <Route index key={id} {...otherProps} />)}
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default Routing