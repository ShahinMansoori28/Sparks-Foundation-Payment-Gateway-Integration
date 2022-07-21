import React from 'react'

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const DonateButton = () => {
  return (
    <Button href='https://rzp.io/l/x6wGnPV1L6'
      variant="contained"
      endIcon={<SendIcon style={{ fontSize: '2rem', marginLeft: '0.5rem' }} />}
      className='btn-btn'
    >
      Donate
    </Button>
  )
}

export default DonateButton
