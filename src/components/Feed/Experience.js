import { Card, CardActionArea } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

import React from 'react'
import "./Experience.sass";

function Experience() {
  return (
    <Card className='experience' >
    <CardContent className="exp_content" style={{marginLeft: "20px"}}>
      <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold", marginBottom: "20px"}}>
      Projects
      </Typography>
      
      <CardActionArea className='ind_exp' href='https://cwyrenee.github.io/chromaticpuzzle/' target='_blank'>
      <Typography gutterBottom variant="h6" component="div" style={{marginTop: "20px"}}>
      Flutter Puzzle Hack
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      Feb 2022 - Mar 2022
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}}>
      A music inspired slide puzzle based on the C Chromatic scale. 
      </Typography>
      </CardActionArea>
      
      <CardActionArea className='ind_project' href='https://docs.google.com/presentation/d/1ppivDnU28mpybBk6xVdqU3hwaAc0zkD6iPj7o6sRxCw/edit?usp=sharing' target='_blank'>
      <Typography gutterBottom variant="h6" component="div">
      Creating a Sustainable Community- NextGen Consulting Ltd.
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      2 weeks | Jan 2021
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}} >
      A HR solution to rekindle a firm’s commitment to corporate social responsibility in a case competition environment (Cut to the Case- HRMC UBC).
      </Typography>
      </CardActionArea>

    </CardContent>
  </Card>
  )
}

export default Experience