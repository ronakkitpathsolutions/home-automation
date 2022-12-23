import React from 'react'
import withAdmin from '../components/hoc/withAdmin'
import { Navigate, Outlet } from 'react-router-dom'
import Topbar from '../components/admin/Topbar'

const AdminLayout = ({...props}) => {
  return (
    <section className='admin_layout' {...props} >
      <Topbar/>
      <WithAdminOutlet {...props} replace {...{ to: '/login' }} />
    </section>
  )
}

export default AdminLayout

const WithAdminOutlet = withAdmin(Outlet, Navigate)