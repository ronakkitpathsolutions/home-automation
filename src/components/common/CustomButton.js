import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({handleClick, label, ...props}) => {
  return (
    <Button sx={{width: "100%"}} {...props} onClick={() => handleClick && handleClick()} variant="contained">{label}</Button>
  )
}

export default CustomButton