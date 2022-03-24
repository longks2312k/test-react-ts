import { AppBar, Box, Button, FormControl, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import WelcomeMessage from './WelcomMessage';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme : Theme) => createStyles({
    positionSelect:{
        color:'white',
        borderBottom:'0.2px solid white'
    }
}))

const Navbar = () => {
    const classes = useStyles()

    const [position, setPosition] = useState<string>('Hello Developer')

    //Time
    const [time, setTime] = useState<Date>(() => new Date(Date.now()))
    useEffect(()=>{
        const timer = setInterval(()=>setTime(new Date(Date.now())),1000)
        return () => clearInterval(timer)
    },[])

    const onPositionChange = (event: React.ChangeEvent<{
        value: unknown;
    }>) =>setPosition(event.target.value as string)

    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Box display='flex' justifyContent='space-between' alignItems='center' width={1} py={2} >
                    <Typography variant='h6'>My App</Typography>
                    <Box textAlign='center'>
                        <WelcomeMessage position={position}/>
                        <Box mt={1}>
                            <FormControl>
                                <Select className={classes.positionSelect} value={position} onChange={onPositionChange}>
                                    <MenuItem value='Hello Developer'>Hello Developer</MenuItem>
                                    <MenuItem value='Font-end Developer'>Font-end Developer</MenuItem>
                                    <MenuItem value='Back-end Developer'>Back-end Developer</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box textAlign='center'>
                        <Box my={1}>
                            <Typography variant='h6'>{time.toUTCString()}</Typography>
                        </Box>
                        <Button variant='contained'>Login</Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;