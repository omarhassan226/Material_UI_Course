import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Container,
  CardHeader,
  Avatar,
  IconButton,
  Collapse,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality sound, noise canceling.',
    price: '$99',
    image: 'https://img.freepik.com/free-vector/makeup-realistic-composition_1284-18448.jpg?t=st=1747030194~exp=1747033794~hmac=c79b9d6da363500818e13836c09e5220ab4ddad75385c5b09ac366a0a382045a&w=826',
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Track your fitness and notifications.',
    price: '$149',
    image: 'https://img.freepik.com/free-vector/pink-cosmetic-ad_52683-8499.jpg?t=st=1747030268~exp=1747033868~hmac=6d6f1f33b08335e3dc4556eea8ddb48e155dab216fc55bf2bd3d5005f0754c3a&w=740',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    description: 'Loud and portable sound system.',
    price: '$59',
    image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1747030295~exp=1747033895~hmac=51f4dc76cef86893ee0ecbe6b45cd3d9b6cb53da8a68669d5fc14a989831a10d&w=996',
  },
];

const Products = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Buy Now
                </Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        
        <CardMedia
          component="img"
          height="194"
          image={`${products[1].image}`}
          alt="Paella dish"
        />

        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <ExpandMore

            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>

        </CardActions>
      </Card> */}
    </Container>
  );
};

export default Products;
