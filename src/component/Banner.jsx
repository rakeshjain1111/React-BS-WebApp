import React from 'react'
import './Banner.css'
import { Button } from 'react-bootstrap'
function Banner() {
  return (
    <div className="videobox position-relative">
    <video className="position-relative w-100"  autoPlay muted loop control >
        <source src='12.mp4' type='video/mp4' height={50} />
    </video>  
    <div className="banner text-center text-light position-absolute top-0 w-100 py-5">
        <img src="logo192.png" alt="logo" width={120} className='image'/>
        <h1>CNC Web World</h1>
        <h2>Remove Your Fresher Tag </h2>
        <Button variant="primary" className='br-primary me-2'>Learn Java </Button>
        <Button variant='primary'>Learn Paython </Button>
    </div> 
</div>
  )
}

export default Banner