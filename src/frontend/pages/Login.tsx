import React from 'react';
import { Input, Grid, Box, Heading, Button } from '@chakra-ui/react';

export const Login = () => {

    return (
        <Box p='20rem' backgroundColor='#EEF0E5'>
            <Heading as='h1' color='#304D30' fontSize='5rem'>Login</Heading>
            <Grid display='flex' justifyContent='center' p='3rem' width='100%' backgroundColor='#304D30' borderRadius='20px'>
                <Grid display='flex' flexDirection='column' gap='1rem' alignItems='center' width='30%'>
                    <Input placeholder="Username" w='100%' backgroundColor='#EEF0E5' borderRadius='10px' h='2rem' border='none' paddingLeft='.5rem' />
                    <Input placeholder="Password" w='100%' backgroundColor='#EEF0E5' borderRadius='10px' h='2rem' border='none' paddingLeft='.5rem' />
                    <Button w='100%' backgroundColor='#163020' borderRadius='10px' h='2rem' border='none' color='#EEF0E5' fontSize='1rem'>Login</Button>
                </Grid>
            </Grid>
        </Box>
    )

}