import React from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import './ContactCard.sass'


export default function ContactCard() {
  return (
    <List className='contacts'>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <DraftsIcon sx={{ color: 'white' }}/>
          </ListItemIcon >
          <ListItemText primary="Email" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LinkedInIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <FacebookIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <TwitterIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InstagramIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText primary="Instagram" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton >
          <ListItemIcon>
            <LocalPhoneIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText primary="Phone" />
        </ListItemButton>
      </ListItem>
    </List>
  )
}
