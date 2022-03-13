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
    <CardActionArea className='projects_action' >
      <CardContent className="profile_content">
        <Typography gutterBottom variant="h5" component="h5" style={{marginLeft: "20px", fontWeight: "bolder"}}>
          Renee Chiu
        </Typography>
        <Typography variant="body1" color="textSecondary" component="h6" style={{marginLeft: "20px", fontWeight: "bold"}}>
          Major in Management, Minor in Computer Science
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default Projects