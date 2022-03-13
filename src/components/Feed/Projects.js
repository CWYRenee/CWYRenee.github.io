import { Card, CardActionArea } from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

import React from 'react'
import "./Projects.sass";

function Projects() {
  return (
  <Card className='projects' >
    <CardContent className="project_content" style={{marginLeft: "20px"}}>
      <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold", marginBottom: "20px"}}>
      Projects
      </Typography>
      <CardActionArea href='https://docs.google.com/presentation/d/1ppivDnU28mpybBk6xVdqU3hwaAc0zkD6iPj7o6sRxCw/edit?usp=sharing'>
      <Typography gutterBottom variant="h6" component="div">
      Creating a Sustainable Community- NextGen Consulting Ltd.
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      Jan 2021 - Jan 2021
      </Typography>
      <Typography variant="body1" gutterBottom>
      A HR solution to rekindle a firm’s commitment to corporate social responsibility in a case competition environment (Cut to the Case- HRMC UBC).
      </Typography>
      </CardActionArea>
      <CardActionArea>
      <Typography gutterBottom variant="h6" component="div">
      Creating a Sustainable Community- NextGen Consulting Ltd.
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      Jan 2021 - Jan 2021
      </Typography>
      <Typography variant="body1" gutterBottom>
      A HR solution to rekindle a firm’s commitment to corporate social responsibility in a case competition environment (Cut to the Case- HRMC UBC).
      </Typography>
      </CardActionArea>
    </CardContent>
  </Card>
  )
}

export default Projects