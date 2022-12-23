import { Button, Container } from '@mui/material'
import React from 'react'
import CustomTable from '../../common/Table'

const Devices = () => {
  return (
    <section className="device_section" >
            <Container maxWidth="xl">
                <div className='device_header' >
                    <h3>All Devices</h3>
                    <Button variant='contained' >Add New Device</Button>
                </div>
                <div>
                    <CustomTable/>
                </div>
            </Container>
        </section>
  )
}

export default Devices