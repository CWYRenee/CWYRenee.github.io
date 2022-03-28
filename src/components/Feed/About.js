import { Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import React from 'react'
import './About.sass'

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export default function About() {
  return (
    <Card className='about' id='about'>
    <CardContent className="about_content" style={{marginLeft: "20px", marginRight: "20px"}}>
      <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold", marginBottom: "20px", marginTop:'20px'}}>
      About
      </Typography>
      
      <CardContent className='ind_about'>
      
      <ImageList className='about_images'
      variant="quilted"
      cols={6}
      rowHeight='auto'
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar 
            title={<Typography variant="subtitle1">{item.title}</Typography>}
            subtitle={<div className='img_text'>{<Typography variant="caption">{item.description}</Typography>}<br /><br /><i>{item.sub}</i></div>}
            />
          </ImageListItem>
      ))}
        </ImageList>
      </CardContent>
    </CardContent>
  </Card>
  )
}

const itemData = [
    {
        img: 'https://i.ibb.co/r7LZptW/summer.jpg',
        title: 'IDEAL SUMMER',
        description: 'Blue sky, clear water, chilling on a kayak with a breeze.',
        sub:"I want to try out sailing.",
        rows: 2,
        cols: 3,
    },
    {
        img: 'https://i.ibb.co/NTW64mB/breakfast.jpg',
        title: 'RANDOM BREAKFAST',
        description: 'A slow morning in good company.',
        sub:"Most days it's oatmeal and milk to start the grind.",
        rows: 1,
        cols: 3,
    },
    
    {
        img: 'https://i.ibb.co/sCt3xKN/ski-selfie.jpg',
        title: 'I LOVE SKIING',
        description: '2022- my first and last season.',
        rows: 1,
        cols: 3,
    },
    {
        img: 'https://i.ibb.co/yYHPmnT/roadtrip.jpg',
        title: 'ROADTRIPS',
        description: 'Nothing beats 4 hours of karaoke with a view among friends.',
        sub:'The dream vehicle: a Rivian with Camp Kitchen, Ski and Bike Mount, plus a Tent Package.',
        rows: 1,
        cols: 4,
    },
    {
        img: 'https://i.ibb.co/F684CXY/evening-sky.jpg',
        title: 'GREAT VIEW TO PONDER ON',
        description: 'A bite too big to chew? Look up and breathe.',
        sub:'Sunset walks to catch up with a friend is the best remedy.',
        rows: 4,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/z7XSMvM/dumplings.jpg',
        title: 'FINICKY DUMPLING MAKING',
        description: '3 hours from scratch for 100 dumplings is the solo record.',
        sub:'A go to when the fridge is not inspiring enough.',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/gMpbs3g/fishing.jpg',
        title: 'NEVER CAUGHT A THING',
        description: 'Underestimated the rainbow trouts. There goes my elaborate plan of biking to all the lakes, and fresh fish for dinner.',
        sub:'Hunting, shooting, fishing: difficult interests for someone from the city.',
        rows: 2,
        cols: 2,
    },
    
    {
        img: 'https://i.ibb.co/Mcdv4NC/fall.jpg',
        title: 'AWESOME COLOURS',
        description: 'Winter is coming...',
        rows: 5,
        cols: 2,
    },
    
    {
        img: 'https://i.ibb.co/rk4DwDL/cuppa.jpg',
        title: 'A GOOD CUPPA',
        description: 'Tea is still better than my new found love for crunching coffee beans.',
        sub:'2 cups of decaf, black AeroPress espresso when milk is out.',
        rows: 1,
        cols: 2,
    },
   
   {
        img: 'https://i.ibb.co/tPzv26m/baking.jpg',
        title: 'PROCRASTINATION',
        description: 'The only time housekeeping is fun.',
        rows: 4,
        cols: 2,
    
    },
    {
        img: 'https://i.ibb.co/KKzsLTt/cards.jpg',
        title: 'THE GAMBLING DEN',
        description: 'It is a serious matter. Blood is shed.',
        sub:'No bets, PG-13',
        rows: 4,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/Yhjz5bp/ski-slopes.jpg',
        title: 'SKI SLOPES',
        description: "A rare view, one that I'll miss when I'm back in the tropics.",
        cols: 6,
    
      },
  ];