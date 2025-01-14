import React from 'react'
import Typography from '../components/Typography'
import { Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <div className='border-top'>
    <Typography variant={'p'} className={'text-center mt-2'}>
    Copyright <span className='fw-bold'>&copy;</span>  2025 - amberarondekar.com
    </Typography>
    </div>
    </>
  )
}

export default Footer