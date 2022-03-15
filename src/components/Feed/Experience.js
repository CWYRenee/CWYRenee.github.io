import { Card, CardActionArea } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@mui/material/Divider';

import React from 'react'
import "./Experience.sass";
import equifood_logo from './EquiFoodlogo.png'
import jdcw_logo from './jdcw_logo.jpeg'

function Experience() {
  return (
    <Card className='experience' >
    <CardContent className="exp_content" style={{marginLeft: "20px"}}>
      <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold", marginBottom: "20px"}}>
      Experience
      </Typography>   
      
      <CardActionArea className='ind_exp' href='https://www.projectequifood.com/?fbclid=IwAR1XlLTc6kK0RprCf-2e9SzhIYYrJP2Jz7H9zO4m_B4I6XaLSOHFYRBp2YQ' target='_blank' style={{marginLeft: '80px'}}>
      <CardMedia
          className= "logo"
          component="img"
          src={jdcw_logo}
        />
      <Typography gutterBottom variant="h6" component="div">
      Business Technology Discipline Academic Delegate 
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      5 mos | Sep 2020 - Jan 2021
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}} >
      • JDC West is the largest business competition in Western Canada; a prestigious event that hosts approximately 650 undergraduate delegates from twelve universities across British Columbia, Alberta, Saskatchewan, and Manitoba <br />
      • Competed in a team of three students to represent UBC Okanagan’s JDC West team in the Business Technology discipline in the 2021 virtual JDC West competition <br />
      • Trained weekly with new cases leading up to the competition <br />
      </Typography>
      </CardActionArea>
      <Divider />

      <CardActionArea className='ind_exp' href='https://www.projectequifood.com/?fbclid=IwAR1XlLTc6kK0RprCf-2e9SzhIYYrJP2Jz7H9zO4m_B4I6XaLSOHFYRBp2YQ' target='_blank' style={{marginLeft: '80px'}}>
      <CardMedia
          className= "logo"
          component="img"
          src={equifood_logo}
      />
      <Typography gutterBottom variant="h6" component="div">
      Executive Project Member
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      9 mos | Jul 2020 - Mar 2021
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}} >
      • Assisted in developing a scalable donation system in engaging businesses to promote food security <br />
      • Reached out to local businesses for a partnership opportunity <br />
      • Planned and created marketing contents tailored to partners' business <br />
      </Typography>
      </CardActionArea>

    </CardContent>
  </Card>
  )
}

export default Experience