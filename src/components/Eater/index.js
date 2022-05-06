import React, {useEffect, useState} from 'react'
import { TextField } from '@mui/material'

export default function Index() {

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const [name, setName] = useState('');
  useEffect(() => {
    
  }, [name])



  return (
    <div className={'eater'}>
        <TextField
        id="eater"
        variant="standard"
        value={name}
        onChange={handleChange}
        />
    </div>
  )
}
