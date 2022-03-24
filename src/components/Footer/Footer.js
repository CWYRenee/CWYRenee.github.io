import { Typography } from '@material-ui/core';
import Modal from '../Feed/Modal'
import ContactCard from "../Feed/ContactCard";

import React, {useRef} from 'react'
import './Footer.sass'
import { Button } from '@mui/material';

const Footer = () => {
  
  const modal = useRef(null)
  
  return (
    <div className="footer">
        <Typography className='footer_content' variant="subtitle2" gutterBottom >
        <div className="footer_left"><Button onClick={() => {modal.current.open()}} style={{ color:"#bf360c"}}>Contact Me </Button></div>
        
        <div className="footer_right"><Button target='_blank' rel="noopener" style={{ color:"#bf360c"}}>Why LinkedOut?</Button></div>
        </Typography>
        <Modal ref={modal}>
          <ContactCard />
        </Modal>
        
        <Typography className='footer_content' variant="subtitle2" gutterBottom >
        © 2022 Renee Chiu
        </Typography>
    </div>
  )
}

export default Footer