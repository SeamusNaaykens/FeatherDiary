import React from 'react';
import {
    Box,
    Grid,
    Heading
} from '@chakra-ui/react'
import { Header } from '../components/Header';
import { Carousel } from '../components/Carousel/Carousel';
import { birds } from '../Data/Data'

export const Home = () => {

    return (
        <main>
            <Header></Header>
            <Grid backgroundColor='#EEF0E5'>
                <Box display='flex' justifyContent='center'>
                    <Heading as='h1' color='#163020'> Welcome to your FeatherDiary!</Heading>
                </Box>
                <Box>
                    <Grid gap='2rem'>
                        <Box padding='3rem' border='1px solid #163020'>
                            <Heading as='h2' color='#163020'>FeatherDiary</Heading>
                        </Box>
                        <Box padding='3rem' border='1px solid #163020'>
                            <Heading as='h2' color='#163020'>BucketList</Heading>
                        </Box>
                        <Box padding='3rem' border='1px solid #163020'>
                            <Heading as='h2' color='#163020'>Achievements</Heading>
                        </Box>
                    </Grid>
                    <Carousel images={birds} ></Carousel>
                </Box>

            </Grid>
        </main>
    )
}