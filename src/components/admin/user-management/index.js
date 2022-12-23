import { Button, Container } from '@mui/material'
import React from 'react'
import CustomTable from '../../common/Table'

const UserManagement = () => {
    return (
        <section className="device_section" >
            <Container maxWidth="xl">
                <div className='device_header' >
                    <h3>All Users</h3>
                    <Button variant='contained' >Add New User</Button>
                </div>
                <div>
                    <CustomTable/>
                </div>
            </Container>
        </section>
    )
}

export default UserManagement