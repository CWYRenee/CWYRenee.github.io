import { Card, CardActionArea } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';

import React from 'react'
import "./Education.sass";
import ubc_logo from './ubc.jpg'

function Education() {
  return (
    <Card className='education' >
    <CardContent className="education_content" style={{marginLeft: "20px"}}>
      <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold", marginBottom: "20px"}}>
      Education
      </Typography>
      <CardMedia
          className= "ubc_logo"
          component="img"
          src={ubc_logo}
        />
      <CardActionArea className='ind_edu' href='https://www.ubc.ca/' target='_blank' style={{marginLeft: '80px'}}>
      <Typography gutterBottom variant="h6" component="div">
      The University of British Columbia
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      Bachelor's of Management with Minor in Computer Science
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      2018 - 2022
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}}>
      Outstanding Internatioanl Student Award recipient | Dean's Honour Roll
      </Typography>
      </CardActionArea>
    </CardContent>
  </Card>
  )
}

export default Education