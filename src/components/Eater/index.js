import React from 'react'
import { TextField } from '@mui/material'

export default function Index({
  input,
  handleInputChange
}) {

  return (
    <div className={'eater'}>
        <TextField
        id="eater"
        variant="standard"
        value={input}
        onChange={handleInputChange}
        />
    </div>
  )
}
