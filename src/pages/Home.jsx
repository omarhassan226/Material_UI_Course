import { Button, Card, CardContent, TextField, Typography, Container, Grid, styled, Paper, Modal, Box, ListItem, ListItemButton, ListItemIcon, ListItemText, List, Divider, Drawer } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionActions from '@mui/material/AccordionActions';
import React, { useEffect, useState } from 'react'
import theme from '../theme';
import Autocomplete from '@mui/material/Autocomplete';
import { Menu } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export const Home = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const topFilms = [
        'rod kalpy',
        'al ayam',
        'm3 7oby w 2shwake'
    ]

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
    };

    // const Item = styled(Paper)(() => ({
    //     backgroundColor: 'yellow',
    //     textAlign: 'center',
    //     padding: '1rem',
    //     color: 'grey'
    // }));

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    const CustomButton = styled(Button)(() => ({
        textTransform: 'none',
    }));

    useEffect(() => {
        setGreeting(`Hello${name ? ', ' + name : ''}! You clicked ${count} times.`);
    }, [count, name]);

    const [openSidebar, setOpenSidebar] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpenSidebar(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {<MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Typography variant='h4' color='secondary' sx={{ marginTop: '2rem' }}>Drawer</Typography>
            <Button sx={{ color: 'blue', outline: '1px solid blue', border: 'none', '&:hover': { backgroundColor: 'red', color: 'white', outline: 'none' } }} onClick={toggleDrawer(true)} component="button" variant='outlined' color='secondary'>Open Sidebar</Button>
            {/* sx={{
                    color: theme.palette.primary.main,
                    outline: `1px solid ${theme.palette.primary.main}`,
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.background.paper,
                    },
                }} */}
            <Drawer open={openSidebar} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

            <Typography variant='h4' color='secondary' sx={{ marginTop: '2rem' }}>Modal</Typography>
            <Button onClick={handleOpen} component="button" variant='outlined' color='secondary'>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>

            <Typography variant='h4' color='secondary' sx={{ marginTop: '2rem' }}>Card</Typography>
            <Card>
                <CardContent>
                    <Typography variant="h4" color='secondary' gutterBottom>Home Page</Typography>
                    <Typography>{greeting}</Typography>
                    <Button variant="outlined" color='secondary' onClick={() => setCount(count + 1)}>Click Me</Button>
                    <Button variant="outlined" endIcon={<Menu />} color="primary">
                        Menu
                    </Button>
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
                renderInput={(params) => <TextField {...params} label="Movie" color='secondary' />}
            />

            <Typography variant='h4' color='secondary' sx={{ marginTop: '2rem' }}>Grid</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                        <Item>{index + 1}</Item>
                    </Grid>
                ))}
            </Grid>
        </>
    );

}
