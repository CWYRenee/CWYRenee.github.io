import { Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
      title: 'Ideal Summer',
      description: '',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/Yhjz5bp/ski-slopes.jpg',
      title: 'Ski Slopes',
      description: '',
    },
    {
      img: 'https://i.ibb.co/sCt3xKN/ski-selfie.jpg',
      title: 'I Love Skiing',
      description: '',
    },
    {
      img: 'https://i.ibb.co/yYHPmnT/roadtrip.jpg',
      title: 'Roadtrips',
      description: '',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/gMpbs3g/fishing.jpg',
      title: 'Never Caught A Thing',
      description: '',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/F684CXY/evening-sky.jpg',
      title: 'Great View To Ponder On',
      description: '',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/Mcdv4NC/fall.jpg',
      title: 'Awesome Colors',
      description: '',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/z7XSMvM/dumplings.jpg',
      title: 'Finicky Dumpling Making',
    //   rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/rk4DwDL/cuppa.jpg',
      title: 'A Good Cuppa',
      description: '',
      
    },
    {
      img: 'https://i.ibb.co/tPzv26m/baking.jpg',
      title: 'Procrastination',
      description: '',
    },
    {
      img: 'https://i.ibb.co/NTW64mB/breakfast.jpg',
      title: 'Random Breakfast',
      description: '',
    },
    {
      img: 'https://i.ibb.co/KKzsLTt/cards.jpg',
      title: 'The Gambling Den',
      description: '',
      cols: 2,
    }
  ];