import { Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

import React from 'react'
import "./Education.sass";
import ubc_logo from './ubc.jpg'

const Education = () => {
  return (
    <Card className='education' id='education'>
    <CardContent className="education_content" style={{marginLeft: "20px", marginRight: "20px"}}>
      <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold", marginBottom: "20px", marginTop:'20px'}}>
      Education
      </Typography>
      <CardMedia
          className= "ubc_logo"
          component="img"
          src={ubc_logo}
          style={{marginTop: "20px"}}
        />
      <CardContent className='ind_edu' href='https://www.ubc.ca/' target='_blank' style={{marginLeft: '80px'}}>
      <Typography gutterBottom variant="h6" component="div">
      The University of British Columbia
      </Typography>
      <Typography variant="subtitle2" component="div">
      Bachelor's of Management with Minor in Computer Science
      </Typography>
      <Typography gutterBottom variant="subtitle2" component="div">
      2018 - 2022
      </Typography>
      <Typography variant="body1" style={{marginBottom: "20px"}}>
      Outstanding International Student Award recipient <br/>
      Dean's Honour Roll <br/>
      Deputy Vice-Chancellor Scholarship for International Students recipient
      </Typography>
      </CardContent>
    </CardContent>
  </Card>
  )
}

export default Education