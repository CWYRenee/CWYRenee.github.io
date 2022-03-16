import { Typography } from '@material-ui/core';

import React from 'react'
import './Footer.sass'

function Footer() {
  return (
    <div className="footer">
        <Typography className='footer_content' variant="subtitle2" gutterBottom >
        <div className="footer_left"><a href="./Profile">Contact Me </a></div>
        |
        <div className="footer_right"><a href='' target='_blank'>Why LinkedOut?</a></div>
        </Typography>

        <Typography className='footer_content' variant="subtitle2" gutterBottom >
        © 2022 Renee Chiu
        </Typography>
    </div>
  )
}

export default Footer