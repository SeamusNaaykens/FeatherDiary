import React from 'react';
import {
    Box,
    Grid,
    Heading
} from '@chakra-ui/react'
import { Header } from '../components/Header';

export const Home = () => {

    return (
        <main>
            <Header></Header>
            <Grid>
                <Box>
                    <Heading> Welcome to your FeatherDiary</Heading>
                </Box>
            </Grid>
        </main>
    )
}