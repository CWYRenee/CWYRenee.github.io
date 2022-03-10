import { Card, CardActionArea } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';


import React from 'react'
import "./Profile.css";
import profile_background from "./profile_background.JPG";
import headshot from "./headshot.jpg";

function Profile() {
  return (
     <Card className='profile'>
       <CardActionArea>
        <CardMedia
          className= {profile_background}
          component="img"
          src={profile_background}
        />
        <Avatar 
        className="headshot" 
        src = {headshot} 
        sx={{ width: 500, height: 500 }}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
       
       {/* <CardActionArea>
        <CardMedia 
            className = "profile_background"
            image = {profile_background}
        />
      <CardHeader
        avatar={
          <Avatar 
          className="headshot" src = {headshot} sx={{ width: 500, height: 500 }}/>
        }
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>  
      </CardActionArea> */}
      </Card>
  )
}

export default Profile