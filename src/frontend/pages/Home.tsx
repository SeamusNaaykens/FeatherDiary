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
                <Grid display='flex' justifyContent='center' flexDirection='column' p='3rem' gap=".5rem">
                    <Heading as='h1' color='#163020' fontSize='3rem'> Welcome to your FeatherDiary!</Heading>
                    <p>FeatherDiary is digital journal and tool designed by a birder for birders! Within this application you can track your sightings, pick out your next birding conquests with your own birding bucketlist and earn achievements by making sightings and compiling journal entries. Happy Birding!</p>
                </Grid>
                <Grid display='flex' justifyContent='space-between'>
                    <Box width='100%'>
                        <Grid>
                            <Box padding='3rem' border='1px solid #163020' height='14rem' display='flex' alignItems='center' fontSize='2rem'>
                                <Heading as='h2' color='#163020'>FeatherDiary</Heading>
                            </Box>
                            <Box padding='3rem' border='1px solid #163020' height='14rem' display='flex' alignItems='center' fontSize='2rem'>
                                <Heading as='h2' color='#163020'>BucketList</Heading>
                            </Box>
                            <Box padding='3rem' border='1px solid #163020' height='14rem' display='flex' alignItems='center' fontSize='2rem'>
                                <Heading as='h2' color='#163020'>Achievements</Heading>
                            </Box>
                        </Grid>
                    </Box>
                    <Carousel images={birds} ></Carousel>
                </Grid>
            </Grid>
        </main>
    )
}