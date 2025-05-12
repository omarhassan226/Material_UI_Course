import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import theme from '../theme';

export const Layout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <AppBar sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center">
              <img src="/logo.png" alt="Logo" height="40" style={{ marginRight: 10 }} />
              <Typography variant="h6" component="div">
                Material UI Course
              </Typography>
            </Box>

            <Box>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
              <Button color="inherit" component={Link} to="/products">Products</Button>
            </Box>

            <Box>
              <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                <Avatar alt="User" src="/avatar.jpg" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </Box>
            
          </Container>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 10 }}>
        <Outlet />
      </Container>
    </>
  );
};
