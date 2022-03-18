import { Card, CardActionArea } from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import Button from '@mui/material/Button';
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from 'react-router-dom';

import React from 'react'
import "./Profile.sass";
import profile_background from "./profile_background.JPG";
import headshot from "./headshot.jpg";

const Profile = () => {
  return (
    <Card className='profile' id='profile' >
      <CardActionArea className='profile_action' >
        <CardMedia
          className= "profile_background"
          component="img"
          src={profile_background}
        />
        <Avatar className="headshot" 
        src = {headshot}
        style={{ height: '180px', width: '180px', border: '5px solid white'}} />
        <CardContent className="profile_content">
          <Typography gutterBottom variant="h5" component="h5" style={{marginLeft: "20px", fontWeight: "bolder"}}>
            Renee Chiu
          </Typography>
          <Typography variant="body1" color="textSecondary" component="h6" style={{marginLeft: "20px", fontWeight: "bold"}}>
            Major in Management, Minor in Computer Science
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='profile_buttons' >
        <BrowserRouter> 
        <Link smooth to="#profile" style={{ textDecoration: 'none' }}><Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}} href="">About</Button></Link>
        <Link smooth to="#education" style={{ textDecoration: 'none' }}><Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}} href="">Education</Button></Link>
        <Link smooth to="#experience" style={{ textDecoration: 'none' }}><Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}} href="">Experience</Button></Link>
        <Link smooth to="#projects" style={{ textDecoration: 'none' }}><Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}}href="">Projects</Button></Link>
        <Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}} href="">Contact Me</Button>
        </BrowserRouter>
      </CardActions>
    </Card>
  )
}

export default Profile