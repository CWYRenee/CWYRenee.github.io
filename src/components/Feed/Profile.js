import { Card, CardActionArea } from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from 'react-router-dom';

import React, {useRef} from 'react'
import "./Profile.sass";
import Modal from './Modal'
import profile_background from "./profile_background.JPG";
import headshot from "./headshot.jpg";
import ContactCard from "./ContactCard";


const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const modal = useRef(null);

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
        <Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}} aria-describedby={id} onClick={handleClick}>About</Button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Take a look through this site</Typography>
      </Popover>
        <Link smooth to="#education" style={{ textDecoration: 'none' }}><Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}} href="">Education</Button></Link>
        <Link smooth to="#experience" style={{ textDecoration: 'none' }}><Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}} href="">Experience</Button></Link>
        <Link smooth to="#projects" style={{ textDecoration: 'none' }}><Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}}href="">Projects</Button></Link>
        <Button size="medium" style={{ color:"#bf360c", fontWeight: "bold"}} onClick={() => {modal.current.open()}}>Contact Me</Button>
        </BrowserRouter>
      </CardActions>
      <Modal ref={modal}>
        <ContactCard />
      </Modal>
    </Card>
  )
}

export default Profile