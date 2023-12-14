import React from 'react';
import {
  Box,
  Grid,
  Heading,
  Image
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';



export const Header = () => {

  const myLogo = require('../assets/images/BirdTracker-Logo.png')

  return (
    <div>
      <Grid backgroundColor='#304D30' p='1rem' display='flex' justifyContent='space-between' alignItems='center'>
        <Box>
          <Link to={'/'}>
            <Heading as='h1' color='#B6C4B6'>FeatherDiary</Heading>

          </Link>
        </Box>
        <Box>
          <Link to={'/login'}>
            <Heading as='h1' color='#B6C4B6'>Login/Signup</Heading>
          </Link>
        </Box>
        <Box>
          <Image src={myLogo} alt="Logo" height='8rem' />
        </Box>
      </Grid>
    </div>
  )
}