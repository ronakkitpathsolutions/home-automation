import { FormControl, TextField } from '@mui/material'
import React from 'react'

const CustomInput = ({readOnly, ...props}) => {
  return (
    <FormControl sx={{width: "100%", marginBottom: "1.25rem"}} >
        <TextField {...props} 
        InputProps={{
            readOnly
          }}
        />
    </FormControl>
  )
}

export default CustomInput