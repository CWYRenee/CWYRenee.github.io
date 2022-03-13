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
      
      <CardActionArea className='ind_project' href='https://cwyrenee.github.io/chromaticpuzzle/' target='_blank'>
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

      <CardActionArea className='ind_project' href='https://www.agorize.com/en/challenges/ai-for-future-business-challenge/teams/54916/participations/62467/previews#' target='_blank'>
      <Typography gutterBottom variant="h6" component="div" style={{marginTop: "20px"}}>
      IoT and AI in Supply Chain and Logistics
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      Jan 2021
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}}>
      A solution of a webapp + ML model upload-able on any edge device to deliver an ever improving model for fleet management in supporting responsible IoT and AI in Supply Chain and Logistics.
      </Typography>
      </CardActionArea>

      <CardActionArea className='ind_project' href='https://devpost.com/software/team-18' target='_blank'>
      <Typography gutterBottom variant="h6" component="div" style={{marginTop: "20px"}}>
      Team 18 - Ecotourism & Sustainability
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      48 hrs | Nov 2020
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}}>
      A solution of a webapp + ML model upload-able on any edge device to deliver an ever improving model for fleet management in supporting responsible IoT and AI in Supply Chain and Logistics.
      </Typography>
      </CardActionArea>

      <CardActionArea className='ind_project' href='https://docs.google.com/presentation/d/1zk7TQP6iM0jGQknUUINrWiHkWBykiAwSgfv3ntgayjo/edit?usp=sharing' target='_blank'>
      <Typography gutterBottom variant="h6" component="div" style={{marginTop: "20px"}}>
      SimpleFoods
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      48 hrs | Feb 2020
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}}>
      Awarded ‘Promising Ventures’ in the 2020 Entrepreneur Bootcamp for trying to solve food insecurities amongst students by connecting students who do not know how to cook with students who know via a webapp.
      </Typography>
      </CardActionArea>

    </CardContent>
  </Card>
  )
}

export default Projects