import { Card, CardActionArea } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@mui/material/Divider';

import React from 'react'
import "./Experience.sass";
import equifood_logo from './EquiFoodlogo.png'
import jdcw_logo from './jdcw_logo.jpeg'
import ubc_logo from './ubc.jpg'
import ubs_logo from './ubs_logo.jpeg'


function Experience() {
  return (
    <Card className='experience' >
    <CardContent className="exp_content" style={{marginLeft: "20px"}}>
      <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold", marginBottom: "20px"}}>
      Experience
      </Typography>   
      
      <CardActionArea className='ind_exp' href='https://www.ubs.com/ca/en.html' target='_blank' style={{marginLeft: '80px'}}>
      <CardMedia
          className= "logo"
          component="img"
          src={ubs_logo}
        />
      <Typography gutterBottom variant="h6" component="div" >
      Group Technology Intern
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "20px"}}>
      3 mos | Jun 2021 - Aug 2021
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "20px"}}>
      Hong Kong
      </Typography>
      </CardActionArea>
      <Divider />

      <CardActionArea className='ind_exp' style={{marginLeft: '80px', marginTop: "20px"}}>
      <CardMedia
          className= "logo"
          component="img"
          src={ubc_logo}
        />
      <Typography gutterBottom variant="h6" component="div">
      The University of British Columbia
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      Contract Part-time | Jan 2021 - Dec 2021
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "20px"}}>
      Canada
      </Typography>
      
      <Typography gutterBottom variant="h6" component="div">
      COSC122 Undergraduate Teaching Assistant
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{fontStyle: "italic"}}>
      Introduction to computer skills (electronic communication, websites, Internet, document editing, programming, data analysis using spreadsheets/databases) and concepts (information representation, abstraction, algorithmic thinking)
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      4 mos | Sep 2021 - Dec 2021
      </Typography>
      <Typography variant="body1" style={{marginBottom: "20px"}} >
      • Conducted weekly two-hour tutorial sessions, marking assignments, and answering students’ inquiries about the subject to a class of 40 students <br />
      </Typography>

      <Typography gutterBottom variant="h6" component="div">
      Peer Notetaker
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{fontStyle: "italic"}}>
      MGMT422 Project Management & MGMT443 New Product and Service Development
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      4 mos | Sep 2021 - Dec 2021
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}} >
      • Provided comprehensive and succinct notes within 24 hours of the lecture to students registered with the Disability Resource Centre <br />
      </Typography>
      
      <Typography gutterBottom variant="h6" component="div">
      International Peer Recruitment Assistant (IPRA)
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      5 mos | Feb 2021 - Jun 2021
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}} >
      • Initiating contact with international applicants and international admits to provide faculty and program-specific information <br />
      • Working with other IPRA's and International Student Recruiter staff to develop a communication plan and overall messaging <br />
      • Engaged with 300+ students in a student panel for the Asia Applicant Information Event <br />
      </Typography>

      <Typography gutterBottom variant="h6" component="div">
      Undergraduate Research Assistant
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{fontStyle: "italic"}}>
      Patent Research
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      1 yr 2 mos | Sep 2020 - May 2021 --- Aug 2021 - Dec 2021
      </Typography>
      <Typography variant="body1" gutterBottom style={{marginBottom: "20px"}} >
      • Systematically searched patent databases in Canada, the US, and globally using Selenium Python <br />
      • Created and compiled relevant findings into a dataset based on results of set search parameter <br />
      </Typography>

      <Typography gutterBottom variant="h6" component="div">
      MGMT250 Undergraduate Teaching Assistant
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{fontStyle: "italic"}}>
      IT managerial issues and their impact on small and medium enterprises and their people
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      4 mos | Jan 2021 - Apr 2021
      </Typography>
      <Typography variant="body1" style={{marginBottom: "20px"}} >
      • Conducted three weekly tutorial sessions to a class of 20 students <br />
      • Marked assignments and answered students’ inquiries about the subject <br />
      </Typography>
      </CardActionArea>
      <Divider />
      
      <CardActionArea className='ind_exp' href='https://www.projectequifood.com/?fbclid=IwAR1XlLTc6kK0RprCf-2e9SzhIYYrJP2Jz7H9zO4m_B4I6XaLSOHFYRBp2YQ' target='_blank' style={{marginLeft: '80px'}}>
      <CardMedia
          className= "logo"
          component="img"
          src={jdcw_logo}
        />
      <Typography gutterBottom variant="h6" component="div" style={{marginTop: "20px"}}>
      Business Technology Discipline Academic Delegate 
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      5 mos | Sep 2020 - Jan 2021
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "20px"}}>
      Canada
      </Typography>
      <Typography variant="body1" style={{marginBottom: "20px"}} >
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
      <Typography gutterBottom variant="h6" component="div" style={{marginTop: "20px"}}>
      Executive Project Member
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "10px"}}>
      9 mos | Jul 2020 - Mar 2021
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" style={{marginBottom: "20px"}}>
      Canada
      </Typography>
      <Typography variant="body1" gutterBottom>
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