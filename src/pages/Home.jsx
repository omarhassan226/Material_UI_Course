import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionActions from '@mui/material/AccordionActions';
import React, { useEffect, useState } from 'react'
import theme from '../theme';
import Autocomplete from '@mui/material/Autocomplete';

export const Home = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const topFilms = [
        'rod kalpy',
        'al ayam',
        'm3 7oby w 2shwake'
    ]

    useEffect(() => {
        setGreeting(`Hello${name ? ', ' + name : ''}! You clicked ${count} times.`);
    }, [count, name]);

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h4" color='secondary' gutterBottom>Home Page</Typography>
                    <Typography>{greeting}</Typography>
                    <Button variant="outlined" color='secondary' onClick={() => setCount(count + 1)} sx={{ mt: 2 }}>Click Me</Button>
                    <TextField
                        fullWidth
                        label="Your name"
                        variant="outlined"
                        margin="normal"
                        color='secondary'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </CardContent>
            </Card>

            <Typography variant='h4' color='secondary' sx={{ marginTop: '2rem' }}>Accordion</Typography>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header">
                    <Typography color='secondary'>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam vitae unde ab, voluptas labore beatae, ullam sunt modi doloremque quam incidunt aliquam tenetur iusto numquam harum voluptate sapiente iste.</Typography>
                </AccordionDetails>
                <AccordionActions>
                    <Button sx={{ backgroundColor: theme.palette.secondary.main, color: 'white' }}>Ok</Button>
                    <Button>Cancel</Button>
                </AccordionActions>
            </Accordion>

            <Typography variant='h4' color='secondary' sx={{ marginTop: '2rem' }}>Autocomplete</Typography>
            <Autocomplete
                disablePortal
                options={topFilms}
                // sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" color='secondary'/>}
            />
        </>
    );

}
