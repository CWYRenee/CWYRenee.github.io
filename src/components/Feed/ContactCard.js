import React from 'react'
import { useState } from "react";
import './ContactCard.sass'

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
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function ContactCard() {

  const email = 'chiuwingyin@gmail.com'
  const linkedin = 'https://www.linkedin.com/in/renee-chiu-974255152/'
  const facebook = 'https://www.facebook.com/profile.php?id=100009776647358'
  const twitter = '@ReneeCWY'
  const instagram = '@renee.cwy'
  const phone = 'Why are you trying to call me?'
  const address = 'Are you a stalker?'

  const [copyText, setCopyText] = useState("Click to Copy")

  return (
    <List className='contacts'>
      <div className='copy'>{copyText}</div>
      <ListItem disablePadding>
        <ListItemButton onClick={() => {
          navigator.clipboard.writeText(email); 
          setCopyText("Address copied!");
          setTimeout(() => {
            setCopyText("Click to Copy");
          }, 1000);}} >
          <ListItemIcon>
          <DraftsIcon sx={{ color: 'white' }}/>
          </ListItemIcon >
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Email</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => {
          navigator.clipboard.writeText(linkedin);
          setCopyText("Link copied!");
          setTimeout(() => {
            setCopyText("Click to Copy");
          }, 1000);}} >
          <ListItemIcon>
            <LinkedInIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>LinkedIn</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => {
          navigator.clipboard.writeText(facebook);
          setCopyText("Link copied!");
          setTimeout(() => {
            setCopyText("Click to Copy");
          }, 1000);}} >
          <ListItemIcon>
            <FacebookIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Facebook</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => {
          navigator.clipboard.writeText(twitter);
          setCopyText("Handle copied!");
          setTimeout(() => {
            setCopyText("Click to Copy");
          }, 1000);}} >
          <ListItemIcon>
            <TwitterIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Twitter</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => {
          navigator.clipboard.writeText(instagram);
          setCopyText("Handle copied!");
          setTimeout(() => {
            setCopyText("Click to Copy");
          }, 1000);}} >
          <ListItemIcon>
            <InstagramIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Instagram</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => {
          navigator.clipboard.writeText(phone);
          setCopyText("Number copied!");
          setTimeout(() => {
            setCopyText("Click to Copy");
          }, 1000);}} >
          <ListItemIcon>
            <LocalPhoneIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Phone</Typography>} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => {
          navigator.clipboard.writeText(address);
          setCopyText("Address copied!");
          setTimeout(() => {
            setCopyText("Click to Copy");
          }, 1000);}} >
          <ListItemIcon>
            <LocationOnIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography sx={{fontWeight: 'bolder', color: 'white'}}>Address</Typography>} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}
