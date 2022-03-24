import React from 'react'
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem, { listItemClasses } from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


export default function ContactCard() {

  const email = 'chiuwingyin@gmail.com'
  const linkedin = 'https://www.linkedin.com/in/renee-chiu-974255152/'
  const facebook = 'https://www.facebook.com/profile.php?id=100009776647358'
  const twitter = '@ReneeCWY'
  const instagram = 'renee.cwy'
  const phone = 'why are you trying to call me?'

  return (
    <List className='contacts' >
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigator.clipboard.writeText(email)} >
          <ListItemIcon>
          <DraftsIcon sx={{ color: 'white' }}/>
          </ListItemIcon >
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Email</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LinkedInIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>LinkedIn</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <FacebookIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Facebook</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <TwitterIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Twitter</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InstagramIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Instagram</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton >
          <ListItemIcon>
            <LocalPhoneIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Phone</Typography>} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}
